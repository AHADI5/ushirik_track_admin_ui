
import ExtraInformations from './ExtraInformations'
import Header from './Header'
import SignUpForms from './admin_signup'

// import { faCheck , faTimes , faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Registration () {
    return (
    <div className="flex">
      <div className="header-login w-full sm:w-3/4">
          <Header shown = {0}/>
          <SignUpForms/>
      </div>
      <div className="extra-information w-full sm:w-1/4 h-full">
        <ExtraInformations/>
      </div>
    </div>

    )
    
}