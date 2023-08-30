import React, { useState } from 'react'
import "./DSPsummary.scss"
import spotify from "../../assets/images/DSP1.png"
import music from "../../assets/images/DSP2.png"
import deraz from "../../assets/images/DSP3.png"
import tidal from "../../assets/images/DSP4.png"
import tiktok from "../../assets/images/DSP5.png"
import yt from "../../assets/images/DSP6.png"
import DownIcon from "../../assets/images/DSPicon.png"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";


const DSPsummary = () => {
    const [selecteditem, setSelectedItem] = useState(null)

    const DSPdata = [
        {
            id: 1,
            img: spotify,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,
        },
        {
            id: 2,
            img: music,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,
        },
        {
            id: 3,
            img: deraz,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,

        },
        {
            id: 4,
            img: tidal,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,

        },
        {
            id: 5,
            img: tiktok,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,

        },
        {
            id: 6,
            img: yt,
            text: "Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. ",
            afterText: "In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene (and who isn’t these days)? Select the panel labeled A-F. Otherwise, users can keep scrolling to access the form below the list.",
            dropIcon: DownIcon,

        },
    ]
    return (
        <>
            <div className="containerDSP_summary">
                <div className="DSP_heading"><h1>DSP Summary</h1></div>
                <div className="DSP_para">Fames sed amet eget eget amet pretium.</div>

                {DSPdata.map((el, index) => (
                    <div className='DSP_Contianer'>
                        <div className="DSP_Accordian" key={el.id}>
                            <div className="DSP_icon">
                                <img src={el.img} alt="" />
                            </div>
                            <div className="DSP_Tagline">
                                {el.text}
                            </div>
                            <div className="DSP_DownIcon" onClick={() => setSelectedItem(selecteditem === index ? null : index)}>
                                {
                                    selecteditem === index ?
                                        < AiOutlineArrowUp color={"#EE0979"} /> :
                                        < AiOutlineArrowDown color={"#EE0979"} />
                                }
                            </div>
                        </div>
                        {
                            selecteditem === index &&
                            <div className='DSP_afterText'>
                                In this application, Tilley Distribution uses an accordion block to neatly organize hundreds of natural aroma chemicals without overwhelming the user. Looking for some caryophyllene .
                            </div>
                        }
                    </div>
                )
                )}


            </div>
        </>
    )
}

export default DSPsummary
