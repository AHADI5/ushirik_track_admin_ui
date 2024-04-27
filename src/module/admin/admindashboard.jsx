import AdminDashContent from "./dashboardContent";
// import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
// import { faUserAlt, faSchool  } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

export default function AdminDashBoard() {
    const params = useParams()
    console.log(params);

  
  
    return (
       <>
            {/* <AppHeader /> */}
            {/* <AppMenu menus={menuComponents} /> */}
            <AdminDashContent schoolID={params['schoolID']}/>
       </>
    );
}