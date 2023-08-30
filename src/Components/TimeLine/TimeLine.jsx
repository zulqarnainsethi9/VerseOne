import React from 'react'
import "./TimeLine.scss"
import contactImg from "../../assets/images/6.png"
import approveImg from "../../assets/images/7.png"
import contractImg from "../../assets/images/8.png"
import musicImg from "../../assets/images/10.png"

const TimeLine = () => {
    const OprationData = [
        {
            id: 1,
            img: contactImg,
            name: "Sign Up",
            para: "Artist fills an application Form to join VerseOne Distribution."
        },
        {
            id: 2,
            img: approveImg,
            name: "Approval",
            para: "Onboarding Team checks and approves or declines the application."
        },
        {
            id: 3,
            img: contractImg,
            name: "Contract",
            para: "After approval an online distribution contract is sent to artist/label for e-signing."
        },
        {
            id: 4,
            img: contactImg,
            name: "Account",
            para: "After contract is signed, an account is created for the artist/label and a welcome emails is sent containing login details."
        },
        {
            id: 5,
            img: musicImg,
            name: "Music Upload",
            para: "With the login details artist/label uploads his music to our platform for distribution to DSPSs"
        },


    ]

    return (
        <>
            <div className="container">
                <h1>Operation Protocol</h1>
                <h4>Fames sed amet eget eget amet pretium</h4>
                <ul className="timeline">
                    {
                        OprationData.map((el, index) => (
                            <li key={index} className="timeline">
                                <div className="icon done"> {index + 1} </div>
                                <div className="panel">
                                    <div className="OprationCard">
                                        <div className="OprationImg">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div><div className="oprationHead">{el.name}</div>
                                            <div className="oprationPara">
                                                {el.para}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }


                </ul>
            </div >


        </>
    )
}

export default TimeLine
