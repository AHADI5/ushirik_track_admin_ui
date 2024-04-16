import Schools from "./component/school/admin/school_list_page"
import Registration from "./component/school/admin/SiginUp_page"
import Login from "./component/authentification/login"
import { BrowserRouter , Routes , Route ,Link } from "react-router-dom"
import SchoolRegistrastionPage from "./component/school/registration/register-school"
import AppHeader from "./component/common/AppHeader"
import AdminDashBoard from "./module/admin/admindashboard"
import DirectorDashBoard from "./module/director/directorDashBoard"
import DirectorContent from "./module/director/directorContent"
export default function App() {

  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/Registration" element ={<Registration/>}/>
            <Route path="/schools" element = {<Schools/>} />
            <Route path="/login"  element = {<Login/>}/>
            <Route path="/register-school" element = {<SchoolRegistrastionPage/>} />
            {/* <Route path="/admin/" element = {} /> */}
            <Route path="/adminDashBoard" element = {<AdminDashBoard/>}/>
            <Route path="/"  element = {<DirectorDashBoard/>}/>
        </Routes>
    </BrowserRouter>
  )
  
}