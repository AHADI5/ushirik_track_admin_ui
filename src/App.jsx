import Schools from "./component/school/admin/school_list_page"
import Registration from "./component/school/admin/SiginUp_page"
import Login from "./component/authentification/login"
import { BrowserRouter , Routes , Route ,Link } from "react-router-dom"
import SchoolRegistrastionPage from "./component/school/registration/register-school"
import AppHeader from "./component/common/AppHeader"
import AdminDashBoard from "./module/admin/admindashboard"
import DirectorDashBoard from "./module/director/directorDashBoard"
import DirectorContent from "./module/director/directorContent"
import Layout from "./component/common/admin_sidebar"
import Users from "./component/users/users"
import SchoolDetails from "./component/school/school_information_page"
import CommonHeader from "./component/common/common_header_layout"
import DirectorSideBar from "./component/common/director_sidebr"
export default function App() {

  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Registration/>}/>
            <Route path="/schools" element = {<Schools/>} />
            <Route path="/login"  element = {<Login/>}/>
            <Route path="/register-school" element = {<SchoolRegistrastionPage/>} />
            {/* <Route path="/admin/" element = {} /> */}
            <Route element = {<CommonHeader/>}>
              <Route element= {<Layout/>}>
                <Route path="/schoolAdmin/:schoolID" element = {<AdminDashBoard/>}/>
                <Route path="/schoolAdmin/:schoolID/users" element = {<Users/>}> </Route>
                <Route path="/schoolAdmin/:schoolID/informations" element = {<SchoolDetails/>}/>
              </Route>
              <Route element = {<DirectorSideBar/>}>
                <Route path="/schoolDirection"  element = {<DirectorDashBoard/>}/>
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
  
}