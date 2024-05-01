
import { useParams } from "react-router-dom";
import DirectorContent from "./directorContent";

 

export default function DirectorDashBoard() {

    //use params here 
    const params  = useParams();
    
    return (
        <div>
            <DirectorContent schoolID ={params['schoolID']}/> 
        </div>
    );
}