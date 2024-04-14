import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForms() {
    const [formData , setFormData] = React.useState(
        {
            firstName : "",
            lastName : "",
            email : "" ,
            password  : "12345" ,
        }
    );

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
    function createAccount(event) {
        event.preventDefault();
    
        // Assuming your server endpoint is "/api/register"
        fetch("http://localhost:8745/api/v1/school/schoolAdmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Server response:", data);
            localStorage.setItem("token" , data.token)
            // Optionally, you can perform some action after receiving a response from the server
            
        })
        .catch(error => {
            console.error("There was a problem with the request:", error);
        });
    }
    
    
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
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
                <button className="create-account-button">Créer</button>
            </form>
        </div>
    );
}
