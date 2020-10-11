import React,{useState} from 'react'
import HeroSection from '../components/Hero/HeroSection';
import Navbar from '../components/Navbar/NavBar'
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
        </div>
    )
}

export default Home
