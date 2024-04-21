import { Link, Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppMenu from "./AppMenu"
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faUserAlt, faSchool  } from "@fortawesome/free-solid-svg-icons";
export default function Layout(params) {
    
    const menuComponents = [
        { menu: "Accueil", link: "/adminDashBoard", icon: faHomeAlt },
        { menu: "Utilisateurs", link: "/users", icon: faUserAlt },
        { menu: "Ecole", link: "/schools", icon: faSchool }
    ];

    return (
        <>
          
            <AppMenu menus={menuComponents} />
            <Outlet/>
        
        </>
        
    )
}