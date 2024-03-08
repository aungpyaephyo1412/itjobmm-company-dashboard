"use client"
import {Button} from "@nextui-org/react";
import {signOut} from "@/actions/auth.actions";

const SignOut = () => {
    return (
        <Button onClick={() => signOut()}>
            Sign Out
        </Button>
    );
};

export default SignOut;