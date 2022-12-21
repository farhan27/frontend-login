import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { InputField } from "../components/input-field/input-field";

export const Login = () => {

    const [passwordStrength, setPasswordStrengh] = useState();
    const [passwordType, setPasswordType] = useState('password')
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors, isDirty } } = useForm();
    const onSubmit = (data) => {
        navigate('/dashboard')
    }
    const upperCasePattern = /[A-Z]/g;
    const lowerCasePattern = /[a-z]/g;
    const numericPattern = /[0-9]/g;
    const specialCharPattern = /[#?!@$%^&*-]/g;
    const lengthPattern = /.{8,}/g;

    const disabled = false;

    const passwordTypeToggle = () => {
        if (passwordType === 'password') {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }

    useEffect(() => {
        if (typeof watch('password') === 'undefined') return
        const passwordStrengthTracker = {
            uppercase: watch('password').match(upperCasePattern),
            lowercase: watch('password').match(lowerCasePattern),
            number: watch('password').match(numericPattern),
            specialChar: watch('password').match(specialCharPattern),
            lengthChar: watch('password').match(lengthPattern)
        }
        setPasswordStrengh(Object.values(passwordStrengthTracker).filter(value => value).length)
    }, [watch('password')])


    return (
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ width: '400px', height: '500px' }}>
                <h1 className="font-medium leading-tight text-3xl mt-0 mb-3 flex justify-center">Create your account</h1>
                <InputField register={register} type={'text'} name={'username'} label={'Username :'} />
                <InputField register={register} type={'text'} name={'email'} label={'Email :'} />
                <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-bold mb-2">Password : </label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={passwordType} name="password" {...register("password")} />
                    <FontAwesomeIcon icon={faEye} style={{ marginLeft: '-30px', cursor: 'pointer' }} onClick={passwordTypeToggle} />
                </div>
                <div className="mt-4">
                    <label>Password Strength</label><br />
                    <progress className="w-full" id="file" value={passwordStrength} max="5" />

                </div>


                <div>
                    <ul className="list-disc">
                        <li className="justify-start">Minimum 8 characters</li>
                        <li>Include a mix of uppercase and lowercase letter</li>
                        <li>Include one or more number or symbol</li>
                    </ul>

                </div>
                <div className="flex justify-center">
                    <button
                        // class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-64"
                        className={classNames(!isDirty && passwordStrength <5 ? 'bg-gray-300' : undefined, 'border font-bold py-2 px-4 rounded-full w-64')}
                        //"border font-bold py-2 px-4 rounded-full w-64"
                        type="submit"
                        disabled={!isDirty}
                    >
                        Continue
                    </button>
                </div>


            </div>

        </form>

    )

}