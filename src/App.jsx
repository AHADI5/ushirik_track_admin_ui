import Schools from "./component/school/admin/school_list_page"
import Registration from "./component/school/admin/SiginUp_page"
import Login from "./component/authentification/login"
import { BrowserRouter , Routes , Route ,Link } from "react-router-dom"
import SchoolRegistrastionPage from "./component/school/registration/register-school"
export default function App() {

  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/Registration" element ={<Registration/>}/>
            <Route path="/schools" element = {<Schools/>} />
            <Route path="/login"  element = {<Login/>}/>
            <Route path="/register-school" element = {<SchoolRegistrastionPage/>} />
        </Routes>
    </BrowserRouter>
  )
  
}