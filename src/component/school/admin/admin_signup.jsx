import React from "react";
import instance from "../../common/axios";
import { TailSpin } from "react-loader-spinner";



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
    const [isLoading, setIsLoading] = React.useState(false);



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
        setIsLoading(true);

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

            //Set is loading to false 
            setIsLoading(false);

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
                <button className="create-account-button" disabled = {isLoading}> 
                    {
                        isLoading  ?

                        <div className="flex justify-center">
                            <TailSpin
                            visible={true}
                            height="30"
                            width="30"
                            color="rgb(255,255 ,255)"
                            ariaLabel="tail-spin-loading"
                            radius="0.5"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        </div>
                        
                    : "Créer"
                    } 
                </button>
            </form>
        </div>
    );
}
