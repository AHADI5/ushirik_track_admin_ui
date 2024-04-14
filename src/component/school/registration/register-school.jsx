import Header from "../admin/Header"
import ExtraInformations from "../admin/ExtraInformations"
import RegisterSchoolForm from "./registration_form"
export default function SchoolRegistrastionPage() {
    return  (
        <>
        <div className="header-login w-full sm:w-3/4">
            <Header shown = {2}/>
            <RegisterSchoolForm />
        </div> 
        <div className="extra-information w-full sm:w-1/3 h-full">
            <ExtraInformations/>
        </div>
    </>

    )
}