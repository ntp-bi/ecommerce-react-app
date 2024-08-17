import React from "react";
import Helmet from "../../components/helmet/Helmet";
import HeroSlider from "../../components/hero-slider/HeroSlider";
import heroSliderData from "../../assets/fake-data/hero-slider";

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={heroSliderData} auto={true} timeOut={5000} control={true} />
        </Helmet>
    );
};

export default Home;
