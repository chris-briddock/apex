"use client";

import { useState, useOptimistic, useActionState } from "react";
import { ThumbsUp, ThumbsDown, X, Send, CheckCircle } from "lucide-react";
import { submitFeedback } from "@/app/actions/feedback";
import { useFormStatus } from "react-dom";

interface FeedbackState {
  rating: "up" | "down" | null;
  feedback: string;
}

// Submit button with loading state using useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? (
        <span className="animate-spin">⟳</span>
      ) : (
        <Send className="w-4 h-4" />
      )}
      {pending ? "Sending..." : "Submit Feedback"}
    </button>
  );
}

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<"up" | "down" | null>(null);
  const [optimisticFeedback, setOptimisticFeedback] = useOptimistic<FeedbackState, FeedbackState>(
    { rating: null, feedback: "" },
    (state, newFeedback) => ({ ...state, ...newFeedback })
  );

  // React 19: useActionState for form state management
  const [formState, formAction] = useActionState(submitFeedback, null);

  const handleSubmit = async (formData: FormData) => {
    // Set optimistic state immediately
    setOptimisticFeedback({
      rating: selectedRating,
      feedback: formData.get("feedback") as string,
    });

    // Call the server action
    formAction(formData);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedRating(null);
  };

  // Show success state after submission
  if (formState?.success) {
    return (
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-6 w-80 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <p className="text-gray-900 dark:text-white font-medium text-lg">
              {formState.message}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Your feedback helps us improve.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <span>Was this helpful?</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 w-80">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Feedback
            </h3>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Optimistic feedback display */}
          {optimisticFeedback.rating && (
            <div className="mb-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-blue-800 dark:text-blue-300">
              Thanks for your {optimisticFeedback.rating === "up" ? "positive" : ""} feedback!
            </div>
          )}

          <form action={handleSubmit}>
            {/* Hidden fields */}
            <input type="hidden" name="rating" value={selectedRating || ""} />
            <input type="hidden" name="page" value={typeof window !== "undefined" ? window.location.pathname : ""} />

            {/* Rating buttons */}
            <div className="flex gap-2 mb-4">
              <button
                type="button"
                onClick={() => setSelectedRating("up")}
                className={`flex-1 py-3 rounded-lg border transition-all ${
                  selectedRating === "up"
                    ? "bg-green-50 dark:bg-green-900/30 border-green-500"
                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <ThumbsUp
                  className={`w-5 h-5 mx-auto ${
                    selectedRating === "up" ? "text-green-600" : "text-gray-500"
                  }`}
                />
              </button>
              <button
                type="button"
                onClick={() => setSelectedRating("down")}
                className={`flex-1 py-3 rounded-lg border transition-all ${
                  selectedRating === "down"
                    ? "bg-red-50 dark:bg-red-900/30 border-red-500"
                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <ThumbsDown
                  className={`w-5 h-5 mx-auto ${
                    selectedRating === "down" ? "text-red-600" : "text-gray-500"
                  }`}
                />
              </button>
            </div>

            {/* Feedback textarea */}
            <textarea
              name="feedback"
              placeholder="Tell us more about your experience..."
              className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />

            {/* Submit button with useFormStatus */}
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
}
