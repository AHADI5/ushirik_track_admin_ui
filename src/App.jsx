import Schools from "./component/school/admin/school_list_page"
import Registration from "./component/school/admin/SiginUp_page"
import Login from "./component/authentification/login"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import SchoolRegistrastionPage from "./component/school/registration/register-school"
import AdminDashBoard from "./module/admin/admindashboard"
import DirectorDashBoard from "./module/director/directorDashBoard"
import Layout from "./component/common/admin_sidebar"

import SchoolDetails from "./component/school/school_information_page"
import CommonHeader from "./component/common/common_header_layout"
import DirectorSideBar from "./component/common/director_sidebr"
import UserTab from "./component/users/userTab"
import Parents from "./component/users/parents"
import Teachers from "./component/users/teachers"
import AllUsers from "./component/users/All"
import ClassRoomList from "./classRoom/classRoomList"

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
              <Route path="/schoolAdmin/:schoolID" element= {<Layout/>}>
                <Route path="/schoolAdmin/:schoolID" element = {<AdminDashBoard/>}/>
                <Route path="/schoolAdmin/:schoolID/users"  element = {<UserTab/>}> 

                    <Route path="/schoolAdmin/:schoolID/users" element= {<AllUsers/>}></Route>
                    <Route path="/schoolAdmin/:schoolID/users/parent" element = {<Parents/>}></Route>
                    <Route path="/schoolAdmin/:schoolID/users/teacher" element = {<Teachers/>}></Route>

                </Route>
                <Route path="/schoolAdmin/:schoolID/informations" element = {<SchoolDetails/>}/>
                <Route path="/schoolAdmin/:schoolID/classRooms" element = {<ClassRoomList/>}/>
                {/* <Route path="/schoolAdmin/:schoolID/classRooms/newClassroom" element = {<ModalWithFields/>}/> */}
                  
              </Route>
              <Route element = {<DirectorSideBar/>}>
                <Route path="/schoolDirection"  element = {<DirectorDashBoard/>}/>
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
  
}