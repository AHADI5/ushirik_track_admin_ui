import AppHeader from "../../component/common/AppHeader";
import AppMenu from "../../component/common/AppMenu";
import AdminDashContent from "./dashboardContent";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faUserAlt, faSchool  } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

export default function AdminDashBoard() {
    const params = useParams()
    console.log(params);

  
    const menuComponents = [
        { menu: "Accueil", link: "/adminDashBoard", icon: faHomeAlt },
        { menu: "Utilisateurs", link: "/users", icon: faUserAlt },
        { menu: "Ecole", link: "/schools", icon: faSchool }
    ];

    return (
       <>
            <AppHeader />
            <AppMenu menus={menuComponents} />
            <AdminDashContent/>
       </>
    );
}