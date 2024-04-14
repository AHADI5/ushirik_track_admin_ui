
export default function Header(showLoginButton) {
    return (
        <div className="header-container flex">
            <div className="header flex">
                <div className="logo flex"> <img src="ushirik-logo.svg" alt="Ushirik-educ" /></div>
                <div className="componey-name flex"> <h3>Ushirik Educ Sytem</h3> </div>
            </div>
            {showLoginButton.shown == 0 && <div className="donate"><button>Login</button></div>}
          
            {showLoginButton.shown == 1 && <div className="donate"> <a href="">back to home page</a> </div>}
            {
            showLoginButton.shown == 2 && 
            <div className="donate profile-picture flex">
                <div className="picture">
                    <div class="m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                        <img src="http://source.unsplash.com/100x100/?woman" class="rounded-full"/>
                    <div class="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="informations">
                    <div className="text-sm font-semibold">Gloire Ahadi</div>
                    <div className="text-xs text-gray-500">Admin</div>
                </div>
                

                
            </div>
            
            }
          

        </div>
        
    )
    
}