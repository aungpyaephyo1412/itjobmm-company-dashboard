"use client"
import {Button, Input, Spinner} from "@nextui-org/react";
import {ChangeEvent, useState} from "react";
import {useAction} from "next-safe-action/hooks";
import {login} from "@/actions/auth.actions";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";

const LoginForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [company, setCompany] = useState({
        "identifier": "",
        "password": "",
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    const {execute, status, result: {validationErrors, serverError}} = useAction(login)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            execute(company)
        }} className="w-full space-y-5 py-5">
            <Input isRequired errorMessage={validationErrors?.identifier?.[0]} label="Email or username" name="identifier"
                   onChange={handleInputChange}
                   isInvalid={!!serverError || !!validationErrors?.identifier}/>
            <Input isRequired
                name="password" onChange={handleInputChange}
                errorMessage={validationErrors?.password?.[0]}
                isInvalid={!!serverError || !!validationErrors?.password}
                label="Password"
                endContent={
                    <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
            />
            <Button color="secondary" fullWidth type="submit">
                {status === "executing" ? <Spinner/> : " Login"}
            </Button>
        </form>
    );
};

export default LoginForm;