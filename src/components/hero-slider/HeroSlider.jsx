import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./hero-slider.scss";

const HeroSlider = (props) => {
    const data = props.data;

    const timeOut = props.timeOut ? props.timeOut : 3000;

    const [activeSlider, setActiveSlider] = useState(0);

    const nextSlide = useCallback(() => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
        setActiveSlider(index);
    }, [activeSlider, data]);

    const prevSlide = () => {
        const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
        setActiveSlider(index);
    };

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);

            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [nextSlide, timeOut, props]);

    return (
        <div className="hero-slider">
            {data.map((item, index) => (
                <div
                    className={`hero-slider__item ${
                        index === activeSlider ? "active" : ""
                    }`}
                    key={index}
                >
                    <img className="hero-slide__item__image" src={item.image} alt="" />
                </div>
            ))}
            {props.control ? (
                <div className="hero-slide__control">
                    <div className="hero-slide__control__item" onClick={prevSlide}>
                        <WestOutlinedIcon />
                    </div>
                    <div className="hero-slide__control__index">
                        <div className="index">
                            {activeSlider + 1} / {data.length}
                        </div>
                    </div>
                    <div className="hero-slide__control__item" onClick={nextSlide}>
                        <EastOutlinedIcon />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

export default HeroSlider;
