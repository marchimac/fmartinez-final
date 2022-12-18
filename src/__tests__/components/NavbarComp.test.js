import { render, screen } from '@testing-library/react'
import NavbarComp from "../../components/NavbarComp";

test('Localizar una clase', () => {
    render(<NavbarComp />)
    const tested = screen.getByTestId('tested')
    expect(tested).toHaveClass('me-auto')
})