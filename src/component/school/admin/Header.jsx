import UserRole from "../../common/userRole";
import logo  from "../../../assets/ushirik-logo.svg"
import { useNavigate } from "react-router-dom";

export default function Header(showLoginButton) {
    const navigate = useNavigate()
    function redirectToLogin() {
        
        navigate("/login")
        
    }

    return (
        <div className="header-container flex">
            <div className="header flex">
                <div className="logo flex"> <img src={logo} alt="Ushirik-educ" /></div>
                <div className="componey-name flex"> <h3>Ushirik Educ Sytem</h3> </div>
            </div>
            {showLoginButton.shown === 0 && <div className="donate"><button onClick={redirectToLogin}>Login</button></div>}
          
            {showLoginButton.shown === 1 && <div className="donate"> <a href="">back to home page</a> </div>}
            {
            showLoginButton.shown === 2 && 
         <UserRole />
            }
        </div>
        
    )
    
}