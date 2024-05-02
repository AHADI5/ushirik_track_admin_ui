import TableWithPagination from "../common/Table/CustomTable";

export default function StudentList() {
    const headers  = ["Name" , "Classe" , "Inscription" ,"Parent" , "Presence" , "Actions"]
    try {
        
    } catch (error) {
        
    }

    return  (
        <>
        <div className="pl-8 pr-4">
            <TableWithPagination headers={headers} content={[]}/>
        </div>
        </>
    )
    
}