import Home from './client/Home'
import Footer from '../components/client/Footer'
import BootCampTraining from './client/BootCampTraining'
import Collabration from './client/Collabration'
import Satellite from './client/Satellite'


const MainHome = () => {
  return (
    <div>
      <Home/>
      <Collabration/>
      <Satellite/>
      <BootCampTraining/>
      <Footer/>
    </div>
  )
}

export default MainHome
