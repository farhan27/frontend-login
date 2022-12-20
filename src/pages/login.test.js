import { Login } from "./login";
import { render ,screen} from "@testing-library/react";

describe('Login Component', ()=>{
    it("the button should be disabled", ()=>{
        render(<Login/>)

        expect(screen.getByRole('button')).toBeDisabled();
    })
})