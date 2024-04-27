import DataTable from "../common/Table/CustomUserTable";
import { useParams } from "react-router-dom";

export default function Parents() {
    const columns  = ["Name" , "Email" ,"Role" ];
    const params = useParams ();
    const schoolID = params['schoolID'];

    return(
        <>
       
        <DataTable columns={columns} fetchDataUrl={`/api/v1/auth/${schoolID}/users/parent`} />
        </>
    )
    
}