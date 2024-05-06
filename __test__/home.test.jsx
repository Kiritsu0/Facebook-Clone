import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe('Home', () => {
    it('should toggle expand', () => {
        render(<Home />);
        const button = screen.getByText("See more");

        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByText("See less")).toBeInTheDocument();

        fireEvent.click(screen.getByText("See less"));

        expect(screen.getByText("See more")).toBeInTheDocument();
    });
});
