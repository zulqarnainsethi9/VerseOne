import React from 'react'
import "./Map.scss"
import MapImg from "../../assets/images/frame.png"

const Map = () => {
    return (
        <>
            <div className="contanier_map_Section">
                <div className="MapImg">
                    <img src={MapImg} alt="" />
                </div>
                <div className="map_heading">
                Worldwide Distribution
                </div>
                <div className="mapTagline">
                In enim sed scelerisque diam nunc, dignissim elit non morbi. Eros, et ultrices magna tortor lacinia convallis amet id. Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. 
                </div>
            </div>
        </>
    )
}

export default Map
