import AppHeader from "../../component/common/AppHeader";
import DirectorContent from "./directorContent";
import AppMenu from "../../component/common/AppMenu";
import { faHomeAlt,
        faUserAlt ,
     
        faNewspaper ,
        faUserGroup,
        faChalkboardTeacher,
        faCalendarWeek
        
      } from "@fortawesome/free-solid-svg-icons";    

export default function DirectorDashBoard() {
    const menuComponents = [
        { menu: "Accueil", link: "/directorDashBoard", icon: faHomeAlt },
        { menu: "Classes", link: "/users", icon: faUserAlt },
        { menu: "Communiqués", link: "/schools", icon: faNewspaper },
        { menu: "Elèves", link: "/schools", icon: faUserGroup }, 
        { menu: "Evénéments", link: "/schools", icon: faCalendarWeek },
        { menu: "Cours", link: "/schools", icon: faChalkboardTeacher }, 
    ];
    return (
        <div>
            <AppHeader/>
            <AppMenu menus={menuComponents}/>
            <DirectorContent /> 
        </div>
    );
}