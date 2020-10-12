import React,{useState} from 'react'
import HeroSection from '../components/Hero/HeroSection';
import { homeObjOne,homeObjThree,homeObjTwo } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/NavBar'
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    } 

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
        </div>
    )
}

export default Home
