"use client";

import { useEffect } from "react";
import type { Metric } from "web-vitals";

export function WebVitals() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    // Dynamically import web-vitals to avoid SSR issues
    import("web-vitals").then((webVitals) => {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;

      // Report to Vercel Analytics
      const reportWebVital = (metric: Metric) => {
        // Log to console in development
        if (process.env.NODE_ENV === "development") {
          console.log("[Web Vitals]", metric.name, metric.value);
        }

        // Send to analytics endpoint
        const body = JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
        });

        // Use sendBeacon for reliability
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/analytics/web-vitals", body);
        } else {
          fetch("/api/analytics/web-vitals", {
            body,
            method: "POST",
            keepalive: true,
          }).catch(() => {
            // Silent fail - analytics shouldn't break the app
          });
        }
      };

      onCLS(reportWebVital);
      onINP(reportWebVital);
      onFCP(reportWebVital);
      onLCP(reportWebVital);
      onTTFB(reportWebVital);
    });
  }, []);

  return null;
}
