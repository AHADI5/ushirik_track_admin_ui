import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import instance from "../common/axios";
import { TailSpin } from "react-loader-spinner";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const  navigate= useNavigate();

    const gatherData = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await instance.post("/api/v1/auth/authenticate", formData);
            localStorage.setItem("token", response.data.token);
            navigate("/schools") // Rediriger vers la page de tableau de bord après l'authentification
        } catch (error) {
            setError("Email ou mot de passe incorrect.");
        }

        setLoading(false);
    };

    return (
        <div className="login-section login-section- flex">
            <form onSubmit={handleLogin} method="post">
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                    Connectez-vous
                </h2>
                {error && <div className="error-message">{error}</div>}
                <div className="email">
                    <div>
                        <label htmlFor="email">E-Mail</label>
                    </div>
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
                    <div>
                        <label htmlFor="password">Mot de passe</label>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Mot de passe"
                        onChange={gatherData}
                        value={formData.password}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <button className="create-account-button" disabled={loading}>
                    {loading ? <div className="flex justify-center">
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
                    </div> : "Connexion"}
                </button>
            </form>
        </div>
    );
}
