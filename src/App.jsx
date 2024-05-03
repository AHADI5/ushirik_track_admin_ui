import Schools from './component/school/admin/school_list_page';
import Registration from './component/school/admin/SiginUp_page';
import Login from './component/authentification/login';
import {Routes, Route} from 'react-router-dom';
import SchoolRegistrastionPage
  from './component/school/registration/register-school';
import AdminDashBoard from './module/admin/admindashboard';
import DirectorDashBoard from './module/director/directorDashBoard';
import Layout from './component/common/admin_sidebar';

import SchoolDetails from './component/school/school_information_page';
import CommonHeader from './component/common/common_header_layout';
import DirectorSideBar from './component/common/director_sidebr';
import UserTab from './component/users/userTab';
import Parents from './component/users/parents';
import Teachers from './component/users/teachers';
import AllUsers from './component/users/All';
import ClassRoomList from './classRoom/classRoomList';
import RegisterTeacherForm from './component/users/AddTeacherForm';
import EditUser from './component/users/EditUser';

import PrivateRoute from './module/auth/ProtectectedComponent';
import {useAuth} from './module/auth/useAuth';
import NewCommuniqueForm from './component/school/Communiques/newCommunique';
import CommuniqueDetails from './component/school/Communiques/communiqueContent';
import CommuniqueList from './component/school/Communiques/communiqueList';
import StudentList from './component/student/studentList';
import EventManagement from './component/school/events/eventManagementPage';


export default function App () {
  const {authed, userRole} = useAuth ();

  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/schools"
        element={
          <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
            <Schools />
          </PrivateRoute>
        }
      />
      <Route
        path="/register-school"
        element={
          <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
            <SchoolRegistrastionPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/register-school"
        element={
          <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
            <SchoolRegistrastionPage />
          </PrivateRoute>
        }
      />

      <Route element={<CommonHeader />}>
        <Route path="/schoolAdmin/:schoolID" element={<Layout />}>
          <Route
            path="/schoolAdmin/:schoolID"
            element={
              <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
                <AdminDashBoard />
              </PrivateRoute>
            }
          />

          <Route element={<UserTab />}>
            <Route
              path="/schoolAdmin/:schoolID/users"
              element={
                <PrivateRoute
                  role={userRole}
                  authed={authed}
                  requiredRole={'ADMIN'}
                >
                  <AllUsers />
                </PrivateRoute>
              }
            />
            <Route
              path="/schoolAdmin/:schoolID/users/teacher"
              element={
                <PrivateRoute
                  role={userRole}
                  authed={authed}
                  requiredRole={'ADMIN'}
                >
                  <Teachers />
                </PrivateRoute>
              }
            />
            <Route
              path="/schoolAdmin/:schoolID/users/parent"
              element={
                <PrivateRoute
                  role={userRole}
                  authed={authed}
                  requiredRole={'ADMIN'}
                >
                  <Parents />
                </PrivateRoute>
              }
            />
            <Route
              path="/schoolAdmin/:schoolID/users/teacher/newTeacher"
              element={
                <PrivateRoute
                  role={userRole}
                  authed={authed}
                  requiredRole={'ADMIN'}
                >
                  <RegisterTeacherForm />
                </PrivateRoute>
              }
            />

            <Route
              path="/schoolAdmin/:schoolID/users/teacher/:email"
              element={
                <PrivateRoute
                  role={userRole}
                  authed={authed}
                  requiredRole={'ADMIN'}
                >
                  <EditUser />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/schoolAdmin/:schoolID/informations"
            element={
              <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
                <SchoolDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/schoolAdmin/:schoolID/classRooms"
            element={
              <PrivateRoute role={userRole} authed={authed} requiredRole={'ADMIN'}>
                <ClassRoomList />
              </PrivateRoute>
            }
          />
        </Route>
        {/* Director protected Routes */}
        <Route path='schoolDirection/:schoolID' element = {<DirectorSideBar/>}>
          <Route
            path="/schoolDirection/:schoolID"
            element={
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                <DirectorDashBoard />
              </PrivateRoute>
            }
          />

          <Route
            path='/schoolDirection/:schoolID/new-communique'
            element = {
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                <NewCommuniqueForm/>
              </PrivateRoute>
            }
          
          />
          <Route
            path='/schoolDirection/:schoolID/communique/:communiqueID'
            element = {
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                <CommuniqueDetails/>
              </PrivateRoute>
            }
          
          />
          <Route
            path='/schoolDirection/:schoolID/communique-all'
            element = {
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                <CommuniqueList/>
              </PrivateRoute>
            }
          
          />

          <Route
            path='/schoolDirection/:schoolID/students'
            element = {
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                <StudentList/>
              </PrivateRoute>
            }
          />

          <Route
            path='/schoolDirection/:schoolID/events'
            element = {
              <PrivateRoute role={userRole} authed={authed} requiredRole={'DIRECTOR'}>
                  <EventManagement/>
              </PrivateRoute>
            }
          />

        </Route>
      </Route>
    </Routes>
  );
}
