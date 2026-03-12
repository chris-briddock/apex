import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FeedbackWidget } from "../FeedbackWidget";

// Mock the server action
jest.mock("@/app/actions/feedback", () => ({
  submitFeedback: jest.fn(),
}));

// Mock useFormStatus
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending: false }),
  useActionState: () => [null, jest.fn()],
}));

describe("FeedbackWidget", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders feedback button initially", () => {
    render(<FeedbackWidget />);

    expect(screen.getByText("Was this helpful?")).toBeInTheDocument();
  });

  it("opens feedback form when button is clicked", () => {
    render(<FeedbackWidget />);

    const button = screen.getByText("Was this helpful?");
    fireEvent.click(button);

    expect(screen.getByText("Feedback")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us more/)).toBeInTheDocument();
  });

  it("closes feedback form when X button is clicked", () => {
    render(<FeedbackWidget />);

    // Open the form
    fireEvent.click(screen.getByText("Was this helpful?"));
    expect(screen.getByText("Feedback")).toBeInTheDocument();

    // Close the form
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    waitFor(() => {
      expect(screen.queryByText("Feedback")).not.toBeInTheDocument();
      expect(screen.getByText("Was this helpful?")).toBeInTheDocument();
    });
  });

  it("has thumbs up and thumbs down buttons", () => {
    render(<FeedbackWidget />);

    fireEvent.click(screen.getByText("Was this helpful?"));

    // Check for thumbs up and thumbs down buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(3); // thumbs up, thumbs down, close
  });

  it("has a textarea for feedback text", () => {
    render(<FeedbackWidget />);

    fireEvent.click(screen.getByText("Was this helpful?"));

    const textarea = screen.getByPlaceholderText(/Tell us more/);
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
  });

  it("has a submit button", () => {
    render(<FeedbackWidget />);

    fireEvent.click(screen.getByText("Was this helpful?"));

    const submitButton = screen.getByRole("button", { name: /submit feedback/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  it("allows typing in the feedback textarea", () => {
    render(<FeedbackWidget />);

    fireEvent.click(screen.getByText("Was this helpful?"));

    const textarea = screen.getByPlaceholderText(/Tell us more/);
    fireEvent.change(textarea, { target: { value: "Great documentation!" } });

    expect(textarea).toHaveValue("Great documentation!");
  });

  it("has correct aria attributes for accessibility", () => {
    render(<FeedbackWidget />);

    fireEvent.click(screen.getByText("Was this helpful?"));

    // Check for dialog-like structure
    const heading = screen.getByRole("heading", { name: "Feedback" });
    expect(heading).toBeInTheDocument();

    // Check for close button
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });
});
