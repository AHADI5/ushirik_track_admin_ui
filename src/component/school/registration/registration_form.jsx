import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import token from "../../common/getToken";
import { jwtDecode } from "jwt-decode";
import instance from "../../common/axios";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";


export default function RegisterSchoolForm() {
    //Extracting admin mail from the token  
    const adminEmail  = jwtDecode(token)['sub']
    
    //Error use state 
    const [error , setError] = React.useState("");
    const [isLoading , setLoading] = React.useState(false);
    const navigate = useNavigate()
   
    const [schoolData, setSchoolData] = useState({
        name: "",
        email: "",
        postalBox: "",
        adminEmail: adminEmail
    });

    const [schoolAddress, setSchoolAddress] = useState({
        schoolQuarter: "",
        schoolAvenue: "",
     
    });

    const [directorData, setDirectorData] = useState({
        firstName: "",
        lastName: "",
        directorEmail: ""
    });

    const [directorAddress, setDirectorAddress] = useState({
        quarter: "",
        avenue: "",
    });

    const [formData, setFormData] = React.useState({});

    const gatherData = (event) => {
        const { name, value } = event.target;
        const [section, field] = name.split('_');

        switch (section) {
            case 'school':
                setSchoolData(prevData => ({
                    ...prevData,
                    [field]: value
                }));
                break;
            case 'schoolAddress':
                setSchoolAddress(prevData => ({
                    ...prevData,
                    [field]: value
                }));
                break;
            case 'director':
                setDirectorData(prevData => ({
                    ...prevData,
                    [field]: value
                }));
                break;
            case 'directorAddress':
                setDirectorAddress(prevData => ({
                    ...prevData,
                    [field]: value
                }));
                break;
            default:
                break;
        }

        setFormData({
            name: schoolData.name,
            email: schoolData.email,
            postalBox: schoolData.postalBox,
            adminEmail: schoolData.adminEmail,
            address: {
                ...schoolAddress
            },
            director: {
          
                firstName: directorData.firstName,
                lastName: directorData.lastName,
                directorEmai :directorData.directorEmail,
                address: {
                    ...directorAddress
                }
            }
        });        
    }


    const schoolCreation = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);
    
        try {
            const response = await instance.post("/api/v1/school/register-school", formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                
            });

            
         
    
            // On success, redirect the user to the updated school list
            navigate("/schools") 
        } catch (error) {
            setError("Les informations sont incorrectes.");
        }
    
        setLoading(false);
        console.log(JSON.stringify(formData))
       
    };
    
    return (
        <div className="login-section school-infos flex">
            <form className="flex" onSubmit={schoolCreation}>
                <h2 className="form-title- mt-10 text-left text-1xl font-bold leading-9 tracking-tight">
                    Enregistrer une Ecole
                </h2>
                <p className="text-left text-1xl text-red-500">{error}</p>
                <div className="informations grid grid-cols-2 gap-10">
                    <div className="school-informations">
                        <div className="infos">
                            <div className="general">
                                <div className="title">ECOLE</div>
                                <div className="info">
                                    <div><label htmlFor="name">Nom <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="school_name"
                                        id="schoolname"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolData.name}
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolemail">Email <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="email"
                                        name="school_email"
                                        id="schoolemail"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolData.schoolEmail}
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolpostal">Boite Postale <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="school_postalBox"
                                        id="schoolpostal"
                                        className="w-full px-4 py-1 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolData.postalBox}
                                    />
                                </div>
                            </div>
                            <div className="address">
                                <div className="info">
                                    <div><label htmlFor="schoolquarter">Quartier <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolAddress_schoolQuarter"
                                        id="schoolquarter"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolAddress.schoolQuarter}
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolAvenue">Avenue <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolAddress_schoolAvenue"
                                        id="schoolAvenue"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolAddress.schoolAvenue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="director-informations">
                        <div className="general">
                            <div className="title">DIRECTEUR</div>
                            <div className="info">
                                <div><label htmlFor="directorname">Nom <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="director_firstName"
                                    id="name"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorData.firstName}
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="lastName">Prenom <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="director_lastName"
                                    id="directorlastname"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorData.latName}
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="email">Email <span className="text-red-500">*</span></label></div>
                                <input
                                    type="email"
                                    name="director_directorEmail"
                                    id="directoremail"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorData.directorEmail}
                                />
                            </div>
                        </div>
                        <div className="address">
                            <div className="info">
                                <div><label htmlFor="quarter">Quartier <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorAddress_quarter"
                                    id="directorchoolquarter"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorAddress.quarter}
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="avenue">Avenue <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorAddress_avenue"
                                    id="directorschoolavenue"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorAddress.avenue}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send-button w-full">
                    <button className="send-button-icon flex justify-start items-center w-full" type="submit">
                        <div className="text">
                        {isLoading ? <div className="flex justify-center">
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
                        </div>
                        <div className="icon"><FontAwesomeIcon icon={faArrowRight} className="send-icon"/></div>
                    </button>
                </div>
            </form>
        </div>
    );
}
