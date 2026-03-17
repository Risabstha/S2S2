import Home from './client/Home'
import Footer from '../components/client/Footer'
import BootCampTraining from './client/BootCampTraining'
import Missions_Objective from './client/Missions_Objective'
import Team from './client/Team'
import AmateurRadio from './client/AmateurRadio'

const MainHome = () => {
  return (
    <div>
      <Home/>
      <AmateurRadio/>
      <Team/>
      <Missions_Objective />
      <BootCampTraining/>
      <Footer/>
    </div>
  )
}

export default MainHome
