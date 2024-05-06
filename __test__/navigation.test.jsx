import '@testing-library/jest-dom'
import { render, screen} from "@testing-library/react";
import Nav from "../components/navigation";

describe('Nav', () => {
    it('renders links based on linkNum', () => {
        const linkNum = 5;
        render(<Nav linkNum={linkNum} />);

        const links = screen.getAllByRole('link');

        expect(links.length).toBe(linkNum);
    });
});