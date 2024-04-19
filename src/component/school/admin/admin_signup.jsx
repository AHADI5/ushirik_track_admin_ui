import React from "react";
import instance from "../../common/axios";



//register admin endpoint 
const REGISTER_ENDPOINT = "/api/v1/school/schoolAdmin";

export default function SignUpForms() {
    const [formData , setFormData] = React.useState(
        {
            firstName : "",
            lastName : "",
            email : "" ,
            password  : "12345" ,
        }
    );

    //Loading initialization 
    //State variable for loading 
    const [isLoading, setIsLoading] = React.useState(false)


    function gatherData(event) {
        const { name, value } = event.target; // Destructure value from event.target
         
        setFormData(prevFormData =>  {
            return {
                ...prevFormData,
                [name] : value
            };
        });
    }

    // Create Account 
    const  createAccount = async (e) => {
        e.preventDefault();

        //sending information to the backend 


        try {
            const response = await instance.post(
                REGISTER_ENDPOINT,
                formData,

            )
            console.log(response);
            const token = response.data["token"];
            //Saving the token on the local storage 
            localStorage.setItem("token" , token);

            //this code below decodes the token 
            
            window.location.href = "/schools"
            
        } catch (error) {
            console.log("registration failed" )
            
        } finally {
            setIsLoading(false);
        }
    
        
    };
    
    
    return (
        <div className="login-section login-section- flex">
            <form action="" className="flex" method="post" onSubmit={createAccount}>
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                    Créer Un compte
                </h2>
                <div className="firstName">
                    <div><label>Prenom</label></div>
                    <input 
                        type="text"
                        name="firstName"
                        id="firstName" 
                        placeholder="Ahadi"
                        onChange={gatherData}
                        value={formData.firstName}
                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                
                    />
                </div>
                <div className="lastName">
                    <div><label>Prenom</label></div> 
                    <input 
                        type="text"
                        name="lastName"
                        id="lastName" 
                        placeholder="Gloire"
                        onChange={gatherData}
                        value={formData.lastName}
                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"

                
                    />
                </div>
                <div className="email">
                    <div><label>E-Mail</label></div>
                    <input 
                        type="email"
                        name="email"
                        id="email" 
                        placeholder="gloire@gmail.com"
                        onChange={gatherData}
                        value={formData.email}
                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
            
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
                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                    />
              </div>
                <button className="create-account-button" disabled = {isLoading}> {isLoading  ? "connexion..." : "Créer"} </button>
            </form>
        </div>
    );
}
