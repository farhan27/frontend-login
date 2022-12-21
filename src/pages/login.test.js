import { Login } from "./login";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

describe('Login Component', () => {
    it("the button should be disabled", () => {
        render(<Login />, { wrapper: BrowserRouter })

        const input = screen.getByRole('button')

        expect(input).toBeDisabled();
    })

    it("the button should be enabled if met the password strength criteria", () => {
        render(<Login />, { wrapper: BrowserRouter })
        const input = screen.getByLabelText('password-input')
        fireEvent.change(input, { target: { value: 'Ayam1234!' } })
        expect(screen.getByRole('button')).toBeEnabled();
    })
})