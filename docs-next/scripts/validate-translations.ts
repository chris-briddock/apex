#!/usr/bin/env node

import { readFileSync, readdirSync } from "fs";
import { join, parse } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MESSAGES_DIR = join(__dirname, "..", "src", "i18n", "messages");

interface TranslationFile {
  locale: string;
  data: Record<string, unknown>;
}

function loadTranslations(): TranslationFile[] {
  const files = readdirSync(MESSAGES_DIR).filter((f) => f.endsWith(".json"));

  return files.map((file) => {
    const locale = parse(file).name;
    const content = readFileSync(join(MESSAGES_DIR, file), "utf-8");
    return { locale, data: JSON.parse(content) };
  });
}

function getAllKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  const keys: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      keys.push(...getAllKeys(value as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

function validateTranslations(): boolean {
  console.log("🔍 Validating translations...\n");

  const translations = loadTranslations();
  const referenceLocale = "en";
  const reference = translations.find((t) => t.locale === referenceLocale);

  if (!reference) {
    console.error(`❌ Reference locale "${referenceLocale}" not found`);
    return false;
  }

  const referenceKeys = getAllKeys(reference.data).sort();
  let hasErrors = false;
  let totalMissing = 0;

  console.log(`📋 Reference locale: ${referenceLocale} (${referenceKeys.length} keys)\n`);

  for (const translation of translations) {
    if (translation.locale === referenceLocale) continue;

    const keys = getAllKeys(translation.data).sort();
    const missing = referenceKeys.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !referenceKeys.includes(k));

    console.log(`🌐 ${translation.locale}:`);
    console.log(`   Keys: ${keys.length}/${referenceKeys.length}`);

    if (missing.length > 0) {
      console.log(`   ❌ Missing ${missing.length} keys:`);
      missing.forEach((key) => {
        console.log(`      - ${key}`);
      });
      totalMissing += missing.length;
      hasErrors = true;
    }

    if (extra.length > 0) {
      console.log(`   ⚠️  Extra ${extra.length} keys (not in reference):`);
      extra.forEach((key) => {
        console.log(`      - ${key}`);
      });
    }

    if (missing.length === 0 && extra.length === 0) {
      console.log(`   ✅ All keys present`);
    }

    console.log("");
  }

  // Summary
  console.log("━".repeat(50));
  if (hasErrors) {
    console.log(`❌ Validation failed: ${totalMissing} missing keys`);
    return false;
  } else {
    console.log("✅ All translations are valid!");
    return true;
  }
}

// Run validation
const isValid = validateTranslations();
process.exit(isValid ? 0 : 1);
