#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, parse } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MESSAGES_DIR = join(__dirname, "..", "src", "i18n", "messages");

interface TranslationFile {
  locale: string;
  data: Record<string, unknown>;
  path: string;
}

function loadTranslations(): TranslationFile[] {
  const files = readdirSync(MESSAGES_DIR).filter((f) => f.endsWith(".json"));

  return files.map((file) => {
    const locale = parse(file).name;
    const path = join(MESSAGES_DIR, file);
    const content = readFileSync(path, "utf-8");
    return { locale, data: JSON.parse(content), path };
  });
}

function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  // Get all unique keys from both objects
  const keys = new Set([...Object.keys(target), ...Object.keys(source)]);

  for (const key of keys) {
    if (key in source && key in target) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        typeof sourceValue === "object" &&
        sourceValue !== null &&
        typeof targetValue === "object" &&
        targetValue !== null &&
        !Array.isArray(sourceValue) &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        );
      } else {
        // Keep target value (existing translation)
        result[key] = targetValue;
      }
    } else if (key in source) {
      // New key from source - add with TODO marker
      const value = source[key];
      if (typeof value === "string") {
        result[key] = `[NEEDS TRANSLATION] ${value}`;
      } else if (typeof value === "object" && value !== null) {
        result[key] = markAsNeedsTranslation(value as Record<string, unknown>);
      } else {
        result[key] = value;
      }
    } else {
      // Key only in target - keep it
      result[key] = target[key];
    }
  }

  return result;
}

function markAsNeedsTranslation(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      result[key] = `[NEEDS TRANSLATION] ${value}`;
    } else if (typeof value === "object" && value !== null) {
      result[key] = markAsNeedsTranslation(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function syncTranslations(): void {
  console.log("🔄 Syncing translations...\n");

  const translations = loadTranslations();
  const referenceLocale = "en";
  const reference = translations.find((t) => t.locale === referenceLocale);

  if (!reference) {
    console.error(`❌ Reference locale "${referenceLocale}" not found`);
    process.exit(1);
  }

  console.log(`📋 Reference locale: ${referenceLocale}\n`);

  let updatedCount = 0;

  for (const translation of translations) {
    if (translation.locale === referenceLocale) continue;

    console.log(`🌐 ${translation.locale}:`);

    const synced = deepMerge(translation.data, reference.data);
    const jsonString = JSON.stringify(synced, null, 2);

    writeFileSync(translation.path, jsonString + "\n");

    // Count new translations needed
    const jsonStr = JSON.stringify(synced);
    const needsTranslation = (jsonStr.match(/\[NEEDS TRANSLATION\]/g) || []).length;

    if (needsTranslation > 0) {
      console.log(`   📝 Synced with ${needsTranslation} new keys to translate`);
      updatedCount++;
    } else {
      console.log(`   ✅ Already up to date`);
    }
    console.log("");
  }

  console.log("━".repeat(50));
  if (updatedCount > 0) {
    console.log(`✅ Synced ${updatedCount} locale file(s)`);
    console.log("📝 Review [NEEDS TRANSLATION] markers and translate them");
  } else {
    console.log("✅ All locales are up to date!");
  }
}

// Run sync
syncTranslations();
