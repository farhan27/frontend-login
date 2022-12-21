import { InputField } from "./input-field";
import { render, screen } from "@testing-library/react";

describe('Input Component', () => {
    it("input render with email name", () => {
        render(<InputField type={'text'} name={'email'} label={'Email :'} />)

        expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    })
})