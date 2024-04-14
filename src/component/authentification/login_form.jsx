export default function LoginForm() {
    return (
            <div className="login-section login-section- flex">
                <form  method="post">
                    <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Connectez vous 
                    </h2>
                    <div className="email">
                        <div><label>E-Mail</label></div>
                        <input 
                            type="email"
                            name="email"
                            id="email" 
                            placeholder="gloire@gmail.com"
                            // onChange={gatherData}
                            // value={formData.email}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="passoword">
                        <div><label>Mot de passe</label></div>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Mot de passe"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <button className="create-account-button">Login</button>
                </form>
            </div>
    )
    
}