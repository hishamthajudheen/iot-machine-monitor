import Header from "../components/Header"
import Login from "../components/login"

export default function LoginPage(){
    return(
        <>
            <div  className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-[1000px] space-y-8 bg-white p-[60px] shadow-lg">
                    <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/register"
                    />
                    <Login />
                </div>
            </div>
        </>
    )
}