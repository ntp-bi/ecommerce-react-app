import React from "react";
import Helmet from "../../components/helmet/Helmet";
import HeroSlider from "../../components/hero-slider/HeroSlider";
import heroSliderData from "../../assets/fake-data/hero-slider";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={heroSliderData} auto={true} timeOut={5000} control={true} />

            <FeatureProduct type="featured" />

            <Categories />

            <FeatureProduct type="trending" />

            <Contact />
        </Helmet>
    );
};

export default Home;
