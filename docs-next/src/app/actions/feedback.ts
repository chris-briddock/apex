"use server";

import { revalidatePath } from "next/cache";

export interface FeedbackData {
  rating: "up" | "down";
  feedback?: string;
  page: string;
  timestamp: string;
}

// Server Action for submitting feedback
export async function submitFeedback(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const rating = formData.get("rating") as "up" | "down";
  const feedback = formData.get("feedback") as string;
  const page = formData.get("page") as string;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  const feedbackData: FeedbackData = {
    rating,
    feedback,
    page,
    timestamp: new Date().toISOString(),
  };

  // In production, send to your analytics service
  console.log("Feedback submitted:", feedbackData);

  // Revalidate the page to show updated data
  revalidatePath(page);

  return {
    success: true,
    message: "Thank you for your feedback!",
  };
}

// Server Action for version switching
export async function setVersionPreference(version: string) {
  // In production, this could update user preferences in a database
  console.log("Version preference set:", version);

  return { success: true };
}
