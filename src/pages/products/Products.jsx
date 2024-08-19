import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import List from "../../components/list/List";
import Helmet from "../../components/helmet/Helmet";

import cateImg from "../../assets/images/categories/products-bg.jpeg";
import "./products.scss";

const Products = () => {
    const id = parseInt(useParams().id);

    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    const filterRef = useRef(null);

    const showHideFilter = () => filterRef.current.classList.toggle("active");

    return (
        <Helmet title="Sản phẩm">
            <div className="products">
                <div className="products__left" ref={filterRef}>
                    <div
                        className="products__left__close"
                        onClick={() => showHideFilter()}
                    >
                        <ArrowBackIosNewOutlinedIcon />
                    </div>
                    <div className="products__left__filter">
                        <h2>Product Categories</h2>
                        <div className="products__left__filter__input">
                            <input
                                type="checkbox"
                                id="1"
                                value={1}
                                className="checkbox"
                            />
                            <label htmlFor="1">Shoes</label>
                        </div>
                        <div className="products__left__filter__input">
                            <input
                                type="checkbox"
                                id="2"
                                value={2}
                                className="checkbox"
                            />
                            <label htmlFor="2">Skirts</label>
                        </div>
                        <div className="products__left__filter__input">
                            <input
                                type="checkbox"
                                id="3"
                                value={3}
                                className="checkbox"
                            />
                            <label htmlFor="3">Coats</label>
                        </div>
                    </div>
                    <div className="products__left__filter">
                        <h2>Filter by price</h2>
                        <div className="products__left__filter__input">
                            <span>0</span>
                            <input
                                className="range"
                                type="range"
                                min={0}
                                max={1000}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                            <span>1000</span>
                        </div>
                    </div>
                    <div className="products__left__filter">
                        <h2>Sort by</h2>
                        <div className="products__left__filter__input">
                            <input
                                id="asc"
                                className="radio"
                                type="radio"
                                name="price"
                                value="asc"
                                onChange={(e) => setSort("asc")}
                            />
                            <label htmlFor="asc">Price (Lowest first)</label>
                        </div>
                        <div className="products__left__filter__input">
                            <input
                                id="desc"
                                className="radio"
                                type="radio"
                                name="price"
                                value="desc"
                                onChange={(e) => setSort("desc")}
                            />
                            <label htmlFor="desc">Price (Highest first)</label>
                        </div>
                    </div>
                </div>
                <div className="products__left__filter__toggle">
                    <button onClick={() => showHideFilter()}>
                        bộ lọc
                    </button>
                </div>
                <div className="products__right">
                    <img className="products__right__image" src={cateImg} alt="" />
                    <List id={id} maxPrice={maxPrice} sort={sort} />
                </div>
            </div>
        </Helmet>
    );
};

export default Products;
