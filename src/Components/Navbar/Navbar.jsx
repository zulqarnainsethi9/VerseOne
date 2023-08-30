import React from 'react'
import "./Navbar.scss"
import logoImg from "../../assets/images/logo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    function openNav() {
        document.getElementById("MobileNav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("MobileNav").style.width = "0";
    }
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="logoImg" />
                </div>
                <div className="nav_Links">
                    <Link to={"/"}> <div> <a href="">Home</a></div></Link>
                    <Link to={"/secpage"}> <div> <a href="">Services</a></div></Link>
                    <div> <a href="">Distribution</a></div>
                    <div> <a href="">Publishing</a></div>
                    <div> <a href="">FAQ</a></div>
                    <div> <a href="">Artists</a></div>
                    <div> <a href="">News</a></div>
                    <div> <a href="">ContactUs</a></div>
                </div>
                <div className="letsStart">
                    <div className='svg'>Eng <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#EE0979" stroke-width="2" />
                    </svg></div>
                    <div className="btn_letsStart">
                        <button>Let’s Start</button>
                    </div>
                </div>
                <div className="hamBurgr_menu" >
                    <AiOutlineMenu onClick={openNav} />
                </div>
            </div>

            <div className="MobileNavbar" id='MobileNav'>
                <span className="closebtn" onClick={closeNav}><FaWindowClose /> </span>
                <Link  to={"/"} onClick={closeNav}>Home</Link>
                <Link  to={"/secpage"} onClick={closeNav}>Services</Link>
                <a href="">Distribution</a>
                <a href="#">Publishing</a>
                <a href="#">FAQ</a>
                <a href="#">Artists</a>
                <a href="#">News</a>
                <a href="#">ContactUs</a>



            </div>
        </>
    )
}

export default Navbar
