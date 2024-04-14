import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RegisterSchoolForm() {
    return (
        <div className="login-section school-infos flex">
            <form className="flex">
                 <h2 className="form-title- mt-10 text-left text-1xl font-bold leading-9 tracking-tight">
                        Enregistrer une Ecole
                </h2>
                <div className="informations grid grid-cols-2 gap-10">
               
                    
                    <div className="school-informations">
                        <div className="infos">
                            
                            <div className="general">
                                <div className="title">ECOLE</div>
                                <div className="info">
                                    <div><label htmlFor="schoolname">Nom <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolname"
                                        id="schoolname"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolemail">Email <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="email"
                                        name="schoolemail"
                                        id="schoolemail"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolpostal">Boite Postale <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolpostal"
                                        id="schoolpostal"
                                        className="w-full px-4 py-1 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                          
                            <div className="address">
                                <div className="info">
                                    <div><label htmlFor="schoolquarter">Quartier <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolquarter"
                                        id="schoolquarter"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="info">
                                    <div><label htmlFor="schoolavenue">Avenue <span className="text-red-500">*</span></label></div>
                                    <input
                                        type="text"
                                        name="schoolavenue"
                                        id="schoolavenue"
                                        className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                        required
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
                                    name="directorname"
                                    id="directorname"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="directorlastname">Prenom <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorlastname"
                                    id="directorlastname"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="directoremail">Email <span className="text-red-500">*</span></label></div>
                                <input
                                    type="email"
                                    name="directoremail"
                                    id="directoremail"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    
                        <div className="address">
                            <div className="info">
                                <div><label htmlFor="directorschoolquarter">Quartier <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorschoolquarter"
                                    id="directorschoolquarter"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="info">
                                <div><label htmlFor="directorschoolavenue">Avenue <span className="text-red-500">*</span></label></div>
                                <input
                                    type="text"
                                    name="directorschoolavenue"
                                    id="directorschoolavenue"
                                    className="w-full px-4 py-1.5 rounded-lg border focus:outline-none focus:border-blue-500"
                                    required
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
    )
}
