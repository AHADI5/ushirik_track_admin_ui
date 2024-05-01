import {useState} from 'react';
import instance from '../../component/common/axios';
import ChildrenGenderChart from '../../component/student/studentChart';
import RecentCommunique from '../../component/school/Communiques/recentCommuniques';
import { StyledButton } from '../../component/common/buttons/buttons';
import { Link, useParams } from 'react-router-dom';


export default function DirectorContent (schoolID) {
  const param = useParams()
  //Fetch school informations
  //1. recent school Communications
  //2. recent children inscripted
  //3. school rules  : this will be fetched later
  //4. Events
  const [communiqueState , setCommuniqueState] = useState([])
  const isCommuniqueEmpty = (value) => {
    setCommuniqueState(value);

  }


  return (
    <div className="content dir-dash pl-10 pr-2 pt-2 pb-0">
      <div class="container mx-auto h-full flex p-2">
        <div class="flex-[2] flex flex-col pr-1">
          <div class="flex flex-1">
            <div class="flex-1 bg-white p-4 shadow">
              <div className="title">Students </div>
              <div className="student-chart-number ">
                  <div className="chart flex items-center justify-center"><ChildrenGenderChart schoolID = {schoolID}/></div>
                  {/* <div className="number flex items-center justify-center "> <span>300</span> </div> */}
                </div>
              </div>
            <div class="flex-1 flex flex-col">
              <div class="flex-1 bg-white p-4 shadow">
                <div className="title">Dicipline</div>
              </div>
              
            </div>
          </div>

          <div class="flex-1 flex flex-col pt-1">
            <div class="flex-1 bg-white p-4 shadow">
              <div className="title">Recent students</div>
            </div>
          </div>
        </div>

        <div class="flex-[1] flex flex-col ">
 
  <div class="flex-[1] bg-white p-4 shadow">
    <div className='flex justify-between'>
      <div className='flex justify-center'> <p className='title'>Communiqués Récents </p></div>
       {isCommuniqueEmpty ? <Link to={`/schoolDirection/${param['schoolID']}/new-communique`}><StyledButton text={"nouveau"}/></Link> : '' }
    </div>
    <RecentCommunique iscommuniqueEmpty={isCommuniqueEmpty}/>
  </div>
  
  <div class="flex-[2] bg-white p-4 mt-1 shadow">
    <div className="title">Evenénement scolaire</div>
    {/* School events content goes here */}
  </div>
</div>

      </div>
    </div>
  );
}
