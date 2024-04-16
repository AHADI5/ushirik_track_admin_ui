
import { faArrowDown, faArrowUp, faBabyCarriage, faChalkboardUser, faChessBoard, faClapperboard, faGraduationCap, } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsersChart from "../admin/usersChart";
export default function AdminDashContent() {
    return (
        <div class="content bg-slate-200 w-fullflex justify-center min-h-screen pt-6 px-2 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* First div with four equal-sized blocks */}
          <div className=" h-24 md:h-auto overview ">
              <div className="icon-over">
                  <div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
                  <div className="over ">
                      <div className="added"> <span><FontAwesomeIcon icon={faArrowUp}/></span> <span>30</span></div>
                      <div className="gone"><span><FontAwesomeIcon icon={faArrowDown}/></span> <span>0</span> <span>aujourd'hui</span> </div> 
                  </div>
              </div>
              <div className="number-title">
                  <div className="number">100</div>
                  <div className="title-over">Elèves</div>
              </div>
          </div>
          <div className="0 h-24 md:h-auto overview">
              <div className="icon-over">
                  <div className="icon"><FontAwesomeIcon icon={faChalkboardUser} /></div>
                  <div className="over">
                      <div className="added"> <span><FontAwesomeIcon icon={faArrowUp}/></span> <span>30</span></div>
                      <div className="gone"><span><FontAwesomeIcon icon={faArrowDown}/></span> <span>0</span> <span>aujourd'hui</span> </div> 
                  </div>
              </div>
              <div className="number-title">
                  <div className="number">100</div>
                  <div className="title-over">Enseignants</div>
              </div>
          </div>
          <div className="00 h-24 md:h-auto overview">
              <div className="icon-over">
                  <div className="icon"><FontAwesomeIcon icon={faBabyCarriage} /></div>
                  <div className="over">
                      <div className="added"> <span><FontAwesomeIcon icon={faArrowUp}/></span> <span>30</span></div>
                      <div className="gone"><span><FontAwesomeIcon icon={faArrowDown}/></span> <span>0</span> <span>aujourd'hui</span> </div> 
                  </div>
              </div>
              <div className="number-title">
                  <div className="number">100</div>
                  <div className="title-over">Parents</div>
              </div>
          </div>
          <div className=" h-24 md:h-auto overview">
              <div className="icon-over">
                  <div className="icon"><FontAwesomeIcon icon={faUserGroup} /></div>
                  <div className="over">
                      <div className="added"> <span><FontAwesomeIcon icon={faArrowUp}/></span> <span>30</span></div>
                      <div className="gone"><span><FontAwesomeIcon icon={faArrowDown}/></span> <span>0</span> <span>aujourd'hui</span> </div> 
                  </div>
              </div>
              <div className="number-title">
                  <div className="number">400</div>
                  <div className="title-over">Total Utilisateurs</div>
              </div>
          </div>
  
          {/* Second div with two blocks */}
          <div className="col-span-3 00 h-72 overview md:h-auto" > 09</div>
          <div className="h-24 md:h-auto overview" > <UsersChart/></div>
          </div>
      </div>
    )
    
}