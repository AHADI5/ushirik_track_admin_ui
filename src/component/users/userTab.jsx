import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function UserTab() {
    const params = useParams ();
    return (
        <>
            <div className="content pt-6 px-1 sm:px-6 md:px-8">
                <div className="users pb-5">
                    <h2 className=" text-gray-500 font-bold">Utilisateurs</h2>
                </div>
                <div className="tabs flex gap-10 pb-4 ">
                    <NavLink 
                    to={`/schoolAdmin/${params['schoolID']}/users`}
                    end
                    className={({isActive}) => isActive ? "link" : null }
                    
                    >All
                    </NavLink>

                    <NavLink 
                    to={`/schoolAdmin/${params['schoolID']}/users/parent`}
                    className={({isActive}) => isActive ? "link" : null }
                    >
                    Parents
                    </NavLink>

                    <NavLink 
                    to={`/schoolAdmin/${params['schoolID']}/users/teacher`}
                    className={({isActive}) => isActive ? "link" : null }
                    >
                    Enseignants
                    </NavLink>
                </div>
                <Outlet/>
            </div>
       
        
        </>
    )
}