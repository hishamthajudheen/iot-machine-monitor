import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <div  className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-[1000px] space-y-8 bg-white p-[60px] shadow-lg  ">
                    <div className="">
                    <Header
                    heading="Signup to create an account"
                    paragraph="Already have an account? "
                    linkName="Login"
                    linkUrl="/login"
                    />
                    <Signup/>
                    </div>
                </div>
            </div>
        </>
    )
}
