import React from 'react'
import "./SecPage.scss"
import MusicPic from "../../assets/images/music.png"
import TimeLine from '../../Components/TimeLine/TimeLine'
import DSPsummary from '../../Components/DSPsummary/DSPsummary'
import FAQ from "../../Components/FAQ/FAQ"
import video from "../../assets/images/video.png"
const SecPage = () => {
    return (
        <>
            <div className="sectionHero_secPage">
                <div className="Box_secPage">
                    <div className="Sec_HeroTagLine">
                        Digital music business made easy
                    </div>
                    <div className="secHeroPara">
                        In enim sed scelerisque diam nunc, dignissim elit non morbi. Eros, et ultrices magna tortor lacinia convallis amet id. Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus.
                    </div>
                    <div className="secHeroBtn">
                        <button>Let's Start</button>
                    </div>
                </div>
            </div>

            <div className="section_music_vedio">
                <div className="music_heading">
                    Video Title
                </div>
                <div className="music_tagline">
                    section_music_vedio
                </div>
                <div className="music_pic">
                    <img src={MusicPic} alt="" />
                </div>
                    <div className='videoIcon'>
                        <img src={video} alt="" />
                    </div>
            </div>



            <TimeLine />
            <DSPsummary />
            <FAQ />

        </>
    )
}

export default SecPage
