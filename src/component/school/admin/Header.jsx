
export default function Header(showLoginButton) {
    return (
        <div className="header-container flex">
            <div className="header flex">
                <div className="logo flex"> <img src="ushirik-logo.svg" alt="Ushirik-educ" /></div>
                <div className="componey-name flex"> <h3>Ushirik Educ Sytem</h3> </div>
            </div>
            {showLoginButton.shown && <div className="donate"><button>Login</button></div>}
            {!showLoginButton.shown && <div className="donate back-to-portal"> <a href="">back to home page</a> </div>}
        </div>
        
    )
    
}