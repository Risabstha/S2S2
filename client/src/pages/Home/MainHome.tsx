import Home from './Home'
import Footer from '../../components/client/Footer'
import BootCampTraining from './BootCampTraining'
import Collabration from './Collabration'
import Satellite from './Satellite'
import  AboutMissionAndCollabrator from './aboutMissionAndCollabrator'


const MainHome = () => {
  return (
    <div>
      <Home/>
      <Collabration/>
      <AboutMissionAndCollabrator/>
      <Satellite/>
      <BootCampTraining/>
      <Footer/>
    </div>
  )
}

export default MainHome
