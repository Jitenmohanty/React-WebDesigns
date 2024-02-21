import './App.css'
import About from './Components/About'
import LandingPage from './Components/LandingPage'
import Merquer from './Components/Merquer'
import Navbar from './Components/Navbar'
import Eye from './Components/Eye'
import Featured from './Components/Featured'
import Reviews from './Components/Reviews'
import SecondEye from './Components/SecondEye'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-full w-full bg-black text-white'>
        <Navbar/>
        <LandingPage/>
        <Merquer/>
        <About/>
        <Eye/>
        <Featured/>
        <Reviews/>
        <SecondEye/>
        <Footer/>
    </div>
  )
}

export default App
