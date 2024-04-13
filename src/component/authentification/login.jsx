import ExtraInformations from "../school/admin/ExtraInformations";
import Header from "../school/admin/Header";
import LoginForm from "./login_form";

export default function Login() {
   
    return (
        <>
            <div className="header-login w-full sm:w-3/4">
                <Header shown = {false}/>
                <LoginForm />
            </div> 
            <div className="extra-information w-full sm:w-1/3 h-full">
                <ExtraInformations/>
            </div>
        </>

    );

}