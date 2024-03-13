"use client"
import {Button, Input, Spinner, Textarea} from "@nextui-org/react";
import Tiptap from "@/components/Tiptap";
import {ChangeEvent, useState} from "react";
import {useAction} from "next-safe-action/hooks";
import {register} from "@/actions/auth.actions";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";

const RegisterForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [whatTheyDo, setWhatTheyDo] = useState("")
    const [description, setDescription] = useState("")
    const [company, setCompany] = useState({
        "name": "",
        "username": "",
        "phone": "",
        "email": "",
        "password": "",
        "type": "",
        "Industry": "",
        "noOfEmployees": "",
        "address": ""
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    const {execute, status, result: {validationErrors, serverError}} = useAction(register)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            execute({...company,phone : parseInt(company.phone,10), whatTheyDo, description})
        }} className="w-full space-y-5 py-5">
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired errorMessage={validationErrors?.name?.[0]} label="Name" name="name" onChange={handleInputChange}
                       isInvalid={!!validationErrors?.name}/>
                <Input isRequired errorMessage={validationErrors?.phone?.[0]} label="Phone" name="phone" onChange={handleInputChange}
                       isInvalid={!!serverError || !!validationErrors?.phone}/>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired errorMessage={validationErrors?.email?.[0]} label="Email" name="email" onChange={handleInputChange}
                       isInvalid={!!serverError || !!validationErrors?.email}/>
                <Input isRequired label="Username" name="username" onChange={handleInputChange}
                       errorMessage={validationErrors?.username?.[0]}
                       isInvalid={!!serverError || !!validationErrors?.username}/>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired errorMessage={validationErrors?.type?.[0]} label="Type" name="type" onChange={handleInputChange}
                       isInvalid={!!validationErrors?.type}/>
                <Input isRequired label="Industry" name="Industry" onChange={handleInputChange}
                       errorMessage={validationErrors?.name?.[0]}
                       isInvalid={!!validationErrors?.Industry}/>
            </div>
            <Input isRequired
                name="password" onChange={handleInputChange}
                errorMessage={validationErrors?.password?.[0]}
                isInvalid={!!validationErrors?.password}
                label="Password"
                endContent={
                    <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
            />
            <Input isRequired label="No Of Employees" name="noOfEmployees" onChange={handleInputChange}
                   errorMessage={validationErrors?.noOfEmployees?.[0]}
                   isInvalid={!!validationErrors?.noOfEmployees}/>
            <Textarea label="Address" name="address" onChange={handleInputChange}
                      errorMessage={validationErrors?.address?.[0]}
                      isInvalid={!!validationErrors?.address}/>
            <div className="space-y-3">
                <label className="text-sm">Description</label>
                <Tiptap onChange={setWhatTheyDo}/>
            </div>
            <div className="space-y-3">
                <label className="text-sm">What we do</label>
                <Tiptap onChange={setDescription}/>
            </div>
            <Button color="secondary" fullWidth type="submit">
                {status === "executing" ? <Spinner/> : " Register"}
            </Button>
        </form>
    );
};

export default RegisterForm;