import React from 'react'
import "./Footer.scss"
// import Flogo from "../../assets/images/footerLogo.png"
import telegram from "../../assets/images/cib_telegram.png"
import insta from "../../assets/images/insta.png"
import fb from "../../assets/images/ffb.png"
import tiktok from "../../assets/images/tiktok.png"
import Logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_logo">
                    <div><img src={Logo} alt="" /></div>
                    <div className="Footer_icon_Class">
                        <div className="footer_icons">
                            <div><img src={telegram} alt="" /></div>
                        </div>
                        <div className="footer_icons">
                            <div><img src={insta} alt="" /></div>
                        </div>
                        <div className="footer_icons">
                            <div><img src={fb} alt="" /></div>
                        </div>
                        <div className="footer_icons">
                            <div><img src={tiktok} alt="" /></div>
                        </div>
                    </div>


                </div>

                <div className="footer_content">
                    <span className="footerHead"> <li>Home</li></span>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>FAQs</li>
                    <li>News</li>
                    <li>Brand Guide</li>
                    <li>Contact Us</li>
                </div>
                <div className="footer_content">
                    <span className="footerHead"><li>Service</li></span>
                    <li>Music Video Services</li>
                    <li>DSP Profile Update</li>
                    <li>Music Distribution</li>
                    <li>Music Analytics</li>
                    <li>Affiliate Program</li>
                    <li>A & R Network</li>
                    <li>GoAsia</li>
                </div>
                <div className="footer_content">
                    <span className="footerHead"> <li>Knowledge Base</li></span>
                    <li>How Youtube Content ID works</li>
                    <li>Mechanical Royalties</li>
                    <li>Performance Royalties</li>
                    <li>Publisher vs. Songwriter</li>
                </div>
            </div>
        </>
    )
}

export default Footer
