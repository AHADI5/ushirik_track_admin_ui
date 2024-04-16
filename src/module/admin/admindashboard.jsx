import AppHeader from "../../component/common/AppHeader";
import AppMenu from "../../component/common/AppMenu";
import AdminDashContent from "./dashboardContent";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faUserAlt, faSchool  } from "@fortawesome/free-solid-svg-icons";

export default function AdminDashBoard() {

  
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