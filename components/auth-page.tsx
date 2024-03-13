import {ReactNode} from "react";

const AuthPage = ({children}:{children:ReactNode}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 relative py-5">
            <div className="w-full flex flex-col min-h-screen max-w-screen-sm mx-auto justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default AuthPage;