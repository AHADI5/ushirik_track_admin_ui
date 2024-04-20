import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import getToken from "../../common/getToken";

export default function RegisterSchoolForm() {
   const adminEmail = getToken["sub"];
   const [formData , setFormData] = React.useState(
        {
            
        }
   )
   const [schoolData , setSchoolData] = React.useState({
            name: "",
            schoolEmail: "",
            postalBox: "",
            adminEmail: adminEmail,

   });

   const [schoolAddress , setSchoolAddress] = React.useState({
        schoolQuarter :  "",
        schoolAvenue  : "",
   })

   const [directorAddress , setDirectorAddress] = React.useState({
        quarter :  "",
        avenue  : "",
    })

   
    const [directorData , setDirectorData] = React.useState({
                firstName : "",
                lastName : "",
                directorEmail  : "" 
            });
        
            
    

    function gatherData(event) {
        const {name , value} = event.target;
        

        setFormData(prevFormData => {
            return {
                ...prevFormData ,
                [name] : value
            };
        });

        setSchoolData(prevFormData => {
            return {
                ...prevFormData ,
                [name] : value
            };
        });

        setSchoolAddress(prevFormData => {
            return {
                ...prevFormData ,
                [name] : value
            };
        });

        setDirectorAddress(prevFormData => {
            return {
                ...prevFormData ,
                [name] : value
            };
        });

        setDirectorData(prevFormData => {
            return {
                ...prevFormData ,
                [name] : value
            };
        });

        setFormData (() => {
            return {
        
                schoolData,
                "address" :{schoolAddress},
                "director" : {
                    directorData,
                    "address" : {directorAddress}
                },
                
            }
        })

    }

    console.log(formData);

    function createSchool () {

    }
    return (
        <div className="login-section school-infos flex">
            <form className="flex" onSubmit={createSchool}>
                 <h2 className="form-title- mt-10 text-left text-1xl font-bold leading-9 tracking-tight">
                        Enregistrer une Ecole
                </h2>
                <div className="informations grid grid-cols-2 gap-10">
               
                    
                    <div className="school-informations">
                        <div className="infos">
                            
                            <div className="general">
                                <div className="title">ECOLE</div>
                                <div className="info">
                                    <div><label htmlFor="name">Nom <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="name"
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
                                        name="schoolEmail"
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
                                        name="postalBox"
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
                                        name="schoolQuarter"
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
                                        name="schoolAvenue"
                                        id="schoolAvenue"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                        onChange={gatherData}
                                        value={schoolAddress.schoolAvenue}
                                    />
                                </div>
                                {/* <div className="info">
                                    <div><label htmlFor="schoolnumber">Numero <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolnumber"
                                        id="schoolnumber"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500 w-64"
                                        required
                                    />
                                </div> */}
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
                                    name="firstName"
                                    id="name"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorData.firstName}
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="middleName">Prenom <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="directorlastname"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorData.lastName}
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="email">Email <span className="text-red-500">*</span></label></div>
                                <input
                                    type="email"
                                    name="directorEmail"
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
                                    name="quarter"
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
                                    name="avenue"
                                    id="directorschoolavenue"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                    onChange={gatherData}
                                    value={directorAddress.avenue}
                                />
                            </div>
                            {/* <div className="info">
                                <div><label htmlFor="directorschoolnumber">Numero <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorschoolnumber"
                                    id="directorschoolnumber"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500 w-64"
                                    required
                                />
                            </div> */}
                            
                        </div>
                    </div>
                </div>
                <div className="send-button w-full">
                    <button className="send-button-icon flex justify-start items-center w-full">
                        <div className="text">continuer</div>
                        <div className="icon"><FontAwesomeIcon icon={faArrowRight} className="send-icon"/></div>
                    </button>
                </div>



            </form>
        </div>
    

)}

