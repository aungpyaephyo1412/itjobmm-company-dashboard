import RegisterForm from "@/components/register-form";
import AuthPage from "@/components/auth-page";
import Link from "next/link";

const Page = () => {
    return (
        <AuthPage heading={<h1>Register your company</h1>} footer={<h4>
            Already register <Link className="text-blue-500 ml-2" href={"/auth/login"}>
            Login
        </Link>
        </h4>}>
            <RegisterForm/>
        </AuthPage>
    );
};

export default Page;