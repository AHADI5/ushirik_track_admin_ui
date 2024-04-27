
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "../common/Table/CustomUserTable";
export default function Teachers() {
    const columns  = ["Name" , "Email" , "Role", "Actions"];
    const params = useParams ();
    const schoolID = params['schoolID'];
    const navigate = useNavigate()
    const redirectToAddTeacherForm  = () => {
        navigate(`/schoolAdmin/${schoolID}/users/teacher/newTeacher`)

    }
    
    return(
        <>
            <div className="add-teacher flex justify-end pr-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm max-w-max "
                    onClick={redirectToAddTeacherForm}
                >
                    Ajouter un Enseignant
                </button>
            </div>
            <DataTable columns={columns} fetchDataUrl={`/api/v1/auth/${schoolID}/users/teacher`} />
        </>
    )
}