import React, { Component } from "react";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slider({ children, toRight = false, cardLength = 3 }) {
    const settings = {
        infinite: true,
        slidesToShow: cardLength - 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5,
        cssEase: "linear",
        rtl: toRight,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };
    return (
        <ReactSlider {...settings}>
            {children}
        </ReactSlider>
    );
}