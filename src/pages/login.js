import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const Login = () => {

    const [passwordStrenght, setPasswordStrengh] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const upperCasePattern = /[A-Z]/g;
    const lowerCasePattern = /[a-z]/g;
    const numericPattern = /[0-9]/g;
    const specialCharPattern = /[#?!@$%^&*-]/g;
    const lengthPattern = /.{8,}/g;

    // const passwordStrenghtTracker = {
    //     uppercase: watch('password').match(upperCasePattern)
    // }

    useEffect(() => {
        if(typeof watch('password') === 'undefined') return
        const passwordStrenghtTracker = {
            uppercase: watch('password').match(upperCasePattern),
            lowercase: watch('password').match(lowerCasePattern),
            number: watch('password').match(numericPattern),
            specialChar: watch('password').match(specialCharPattern),
            lengthChar: watch('password').match(lengthPattern)
        }
        console.log(passwordStrenghtTracker);
        console.log(Object.values(passwordStrenghtTracker).filter(value => value).length);
        setPasswordStrengh(Object.values(passwordStrenghtTracker).filter(value => value).length)
    }, [watch('password')])

  
    console.log(watch('password'));
    return (
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
          
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ width: '400px', height: '500px' }}>
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-3 flex justify-center">Create your account</h1>
                <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-bold mb-2">Username : </label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={'text'} name="username" {...register("username")} />
                </div>
                <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-bold mb-2">Email : </label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={'text'} name="email" {...register("email")} />
                </div>
                <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-bold mb-2">Password : </label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={'password'} name="password" {...register("password")} />
                </div>
                <div>
                    <label>Password Strength</label><br />
                    <progress className="w-full" id="file" value={passwordStrenght} max="5" />

                </div>


                <div>
                    <ul className="list-disc">
                        <li className="justify-start">Minimum 8 characters</li>
                        <li>Include a mix of uppercase and lowercase letter</li>
                        <li>Include one or more number or symbol</li>
                    </ul>

                </div>
                <div className="flex justify-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-64" type="submit">
                        Continue
                    </button>
                </div>


            </div>

        </form>

    )

}