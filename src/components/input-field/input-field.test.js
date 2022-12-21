import { InputField } from "./input-field";
import { render ,screen} from "@testing-library/react";

describe('Input Component', ()=>{
    it("the button should be disabled", ()=>{
        render(<Login/>)

        expect(screen.getByRole('button')).toBeDisabled();
    })
})