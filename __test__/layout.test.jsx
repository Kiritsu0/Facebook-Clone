import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Layout from "../app/layout.jsx";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Layout", () => {
  it("should render header when pathname is not '/stories'", () => {
    // Mock the usePathname hook to return a different value
    usePathname.mockReturnValue("/");

    render(<Layout>Test Content</Layout>);
    console.log(document.body.innerHTML)
    expect(screen.getByRole("header")).toBeInTheDocument();
  });

  it("should not render header when pathname is '/stories'", () => {
    // Mock the usePathname hook to return a different value
    usePathname.mockReturnValue("/stories");

    render(<Layout>Test Content</Layout>);

    expect(screen.queryByRole("header")).toBeNull();
  });
});
