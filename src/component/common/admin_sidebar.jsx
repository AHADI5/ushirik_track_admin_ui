import { Outlet, useParams } from "react-router-dom"
import AppMenu from "./AppMenu"
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faUserAlt, faSchool , faChalkboardTeacher  } from "@fortawesome/free-solid-svg-icons";
export default function Layout() {
    const params = useParams()
    const menuComponents = [
        { menu: "Accueil", link: `/schoolAdmin/${params['schoolID']}`, icon: faHomeAlt },
        { menu: "Utilisateurs", link: `/schoolAdmin/${params['schoolID']}/users`, icon: faUserAlt },
        { menu: "Ecole", link: `/schoolAdmin/${params['schoolID']}/informations`, icon: faSchool },
        { menu: "Classes", link: `/schoolAdmin/${params['schoolID']}/classrooms`, icon: faChalkboardTeacher }
    ];

    return (
        <>
          
            <AppMenu menus={menuComponents} />
            <Outlet/>
        
        </>
        
    )
}