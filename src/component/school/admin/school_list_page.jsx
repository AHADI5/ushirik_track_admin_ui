
import Schools from "../school_list_page";
import ExtraInformations from "./ExtraInformations";
import Header from "./Header";

export default function SchoolList() {
    return (
        <>
        <div className="header-login w-full sm:w-3/4">
            <Header shown = {false}/>
            <Schools/>
            
        </div> 
        <div className="extra-information w-full sm:w-1/3 h-full">
            <ExtraInformations/>
        </div>
    </>

    )
    
}