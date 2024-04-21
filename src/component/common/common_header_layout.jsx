import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function CommonHeader() {
    return (
        <>
            <AppHeader/>
            <Outlet/>
        </>
    )
    
}