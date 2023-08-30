import React, { useState } from 'react'
import "./FAQ.scss"
import Icon from "../../assets/images/FAQicon.svg"

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const FAQ = () => {
    const [selectedItem, setSelectedItem] = useState("");
    const FQAdata = [
        {
            id: 1,
            btnText: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
            Text: "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.",

        },
        {
            id: 2,
            btnText: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
            Text: "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.",

        },
        {
            id: 3,
            btnText: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
            Text: "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.",

        },
        {
            id: 4,
            btnText: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
            Text: "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.",

        },
    ]

    return (
        <>
            <div className="section_FAQ">
                <div className="FAQ_heading">FAQ</div>
                <div className="FAQ_tagline">Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. </div>

                <div className="FAQ_function">
                    <div className="FAQ_img">
                        <div className="img_Upper_icon">
                            <img src={Icon} alt="" />
                        </div>
                    </div>

                    <div className="Accordian_flex">
                        {FQAdata.map((elm, index) => {
                            return (
                                <div className="FAQ_Accordian" key={elm.id}>
                                    {elm.btnText}
                                    <span className='icon_pad' onClick={() => setSelectedItem(selectedItem === index ? null : index)}>
                                        {
                                            selectedItem === index ?
                                                < AiOutlineArrowUp color={"#EE0979"} /> :
                                                < AiOutlineArrowDown color={"#EE0979"} />
                                        }
                                    </span>
                                    {
                                        selectedItem === index &&
                                        <div className="AfterText">
                                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ

