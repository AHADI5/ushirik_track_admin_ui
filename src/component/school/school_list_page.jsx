import React, { useState, useEffect } from "react";
import instance from "../common/axios";
import Avatar from "react-avatar";

export default function Schools() {
    const [schools, setSchools] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await instance.get("/api/v1/school/admin/schools");
                setSchools(response.data);
                console.log(schools[0])
            } catch (error) {
                setError("Failed to fetch schools.");
            }
        };

        fetchSchools();
    }, []);

    return (
        <div className="login-section schools flex">
            <div className="schools-list">
                <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                    Connectez-vous
                </h2>
                <p className="title">
                    Vous pouvez administrer plusieurs écoles avec partir d'une seule adresse mail
                </p>
                {error && <p className="error">{error}</p>}
                <div className="overflow-y-auto max-h-60">
                    <div className="schools">
                        {schools.length === 0 ? (
                            <div className="empty-message">
                                <p>Aucune école disponible pour l'instant.</p>
  
                            </div>
                        ) : (
                            schools.map(school => (
                                <div className="schools-administrated flex" key={school.id}>
                                    <div className="school flex">
                                        <div className="letter-image flex"><p><Avatar name={school.name} round={true} size="50" /></p></div>
                                        <div className="school-general-info">
                                            <div className="name">{school.name}</div>
                                            <div className="students-teachers flex">
                                                <div className="students flex">
                                                    <div className="number">{school.students}</div>
                                                    <div className="text">ÉLÈVES</div>
                                                </div>
                                                <div className="dot-separation flex">•</div>
                                                <div className="classroom flex">
                                                    <div className="number">{school.classes}</div>
                                                    <div className="text">CLASSES</div>
                                                </div>
                                                <div className="dot-separation flex">•</div>
                                                <div className="classroom flex">
                                                    <div className="number">{school.teachers}</div>
                                                    <div className="text">ENSEIGNANTS</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status">{school.status}</div>
                                </div>
                                
                            ))
                        )}
                    </div>
                    
                </div>
                <div className="action"><button>nouvelle Ecole</button></div>
            </div>
        </div>
    );
}
