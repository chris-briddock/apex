import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchModal } from "../SearchModal";

// Mock the SearchItem type
const mockResults = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn how to get started",
    href: "/getting-started",
    category: "Getting Started",
    keywords: ["install", "setup"],
  },
  {
    id: "utilities",
    title: "Utilities",
    description: "Utility classes",
    href: "/utilities",
    category: "Core Concepts",
    keywords: ["utilities"],
  },
];

describe("SearchModal", () => {
  const mockOnClose = jest.fn();
  const mockSetQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does not render when isOpen is false", () => {
    const { container } = render(
      <SearchModal
        isOpen={false}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it("renders when isOpen is true", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    expect(screen.getByPlaceholderText(/Search documentation/)).toBeInTheDocument();
  });

  it("displays search input", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    const input = screen.getByPlaceholderText(/Search documentation/);
    expect(input).toBeInTheDocument();
    expect(input.tagName.toLowerCase()).toBe("input");
  });

  it("updates query on input change", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    const input = screen.getByPlaceholderText(/Search documentation/);
    fireEvent.change(input, { target: { value: "test query" } });

    expect(mockSetQuery).toHaveBeenCalledWith("test query");
  });

  it("displays results when provided", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query="test"
        setQuery={mockSetQuery}
        results={mockResults}
      />
    );

    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Utilities")).toBeInTheDocument();
    expect(screen.getByText(/2 results/)).toBeInTheDocument();
  });

  it("displays no results message when query has no matches", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query="nonexistent"
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    expect(screen.getByText(/No results found/)).toBeInTheDocument();
  });

  it("displays placeholder message when query is empty", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    expect(screen.getByText(/Type to search documentation/)).toBeInTheDocument();
  });

  it("calls onClose when clicking outside", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    const backdrop = screen.getByText(/Type to search documentation/).closest("div")?.parentElement?.parentElement;
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(mockOnClose).toHaveBeenCalled();
    }
  });

  it("clears query when clear button is clicked", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query="test"
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    const clearButton = screen.getByRole("button", { name: /clear/i }) || screen.getAllByRole("button")[1];
    fireEvent.click(clearButton);

    expect(mockSetQuery).toHaveBeenCalledWith("");
  });

  it("has keyboard navigation instructions in footer", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query=""
        setQuery={mockSetQuery}
        results={[]}
      />
    );

    expect(screen.getByText(/to navigate/)).toBeInTheDocument();
    expect(screen.getByText(/to select/)).toBeInTheDocument();
  });

  it("displays result count in footer", () => {
    render(
      <SearchModal
        isOpen={true}
        onClose={mockOnClose}
        query="test"
        setQuery={mockSetQuery}
        results={mockResults}
      />
    );

    expect(screen.getByText(/2 results/)).toBeInTheDocument();
  });
});
