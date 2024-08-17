import React from "react";
import Grid from "../../components/grid/Grid";
import Helmet from "../../components/helmet/Helmet";
import HeroSlider from "../../components/hero-slider/HeroSlider";
import heroSliderData from "../../assets/fake-data/hero-slider";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
import productData from "../../assets/fake-data/products";
import Card from "../../components/card/Card";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={heroSliderData} auto={true} timeOut={5000} control={true} />

            <div className="feature-product">
                <FeatureProduct type="featured" />
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {productData.getProducts(4).map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </Grid>
            </div>

            <Categories />

            <div className="feature-product">
                <FeatureProduct type="trending" />
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {productData.getProducts(4).map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </Grid>
            </div>

            <Contact />
        </Helmet>
    );
};

export default Home;
