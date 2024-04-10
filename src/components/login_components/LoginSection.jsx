import React from "react";

export default function LoginSection() {
    const [formData , setFormData] = React.useState(
        {
            firstName : "",
            lastName : "",
            email : "" ,
            password  : "" ,
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
    
    return (
        <div className="login-section flex">
            <form action="" className="flex">
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Créer Un compte
                </h2>
                <div className="firstName">
                    <input 
                        type="text"
                        name="firstName"
                        id="firstName" 
                        placeholder="Nom"
                        onChange={gatherData}
                        value={formData.firstName}
                    />
                </div>
                <div className="lastName">
                    <input 
                        type="text"
                        name="lastName"
                        id="lastName" 
                        placeholder="Prenom"
                        onChange={gatherData}
                        value={formData.lastName}
                    />
                </div>
                <div className="email">
                    <input 
                        type="email"
                        name="email"
                        id="email" 
                        placeholder="E-mail"
                        onChange={gatherData}
                        value={formData.lastName}
                    />
                </div>

                <div className="password">
                    <input 
                        type="password"
                        name="password"
                        id="password" 
                        placeholder="Mot de passe"
                        onChange={gatherData}
                        value={formData.lastName}
                    />
                </div>
                <div className="phone">
                    <input 
                        type="tel"
                        name="phone"
                        id="phone" 
                        placeholder="phone"
                        onChange={gatherData}
                        value={formData.lastName}
                    />
                </div>
                <button>Créer</button>

            </form>
        </div>
    );
}
