import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Schools() {
    return (
        <div className="login-section schools flex">
           <div className="schools-list">
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Connectez vous 
                </h2>
                <p className="title">vous pouvez Administrez plusieurs écoles <br /> avec partir d'une seule addresse mail </p>   
                    <div className="schools-administrated flex">
                        <div className="school flex">
                            <div className="letter-image flex"><p>E</p></div>
                            <div className="school-general-info">
                                <div className="name">Ecole Primaire majengo</div>
                                <div className="students-teachers flex">
                                    <div className="students flex">
                                        <div className="number">950</div>
                                        <div className="text">ELEVE</div>
                                    </div>  
                                    <div className="dot-separation flex"><FontAwesomeIcon icon={faCircle} /></div>
                                    <div className="classroom flex">
                                        <div className="number">12</div>
                                        <div className="text">CLASSES</div>
                                    </div>
                                    <div className="dot-separation flex"><FontAwesomeIcon icon={faCircle} /></div>
                                    <div className="classroom flex">
                                        <div className="number">12</div>
                                        <div className="text">ENSEIGNATS</div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        <div className="status">En cours</div>
                    </div>
                    <div className="action">
                        <button>Nouvelle Ecole</button>
                    </div>
           </div>
        </div>

    )
    
}