export default function Schools() {
    return (
        <div className="login-section schools flex">
           <div className="schools-list">
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Connectez vous 
                </h2>
                <p>vous pouvez Administrez plusieurs écoles <br /> avec partir d'une seule addresse mail </p>   
                    <div className="schools-administrated">
                        <div className="school flex">
                            <div className="letter-image flex"><p>E</p></div>
                            <div className="school-general-info">
                                <div className="name">Ecole Primaire majengo</div>
                                <div className="students-teachers flex">
                                    <div className="students flex">
                                        <span className="number">950</span>
                                        <span className="text">ELEVE</span>
                                    </div>  
                                    <div className="classroom flex">
                                        <span className="number">12</span>
                                        <span className="text">CLASSES</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action-new-school">

                    </div>
           </div>
        </div>

    )
    
}