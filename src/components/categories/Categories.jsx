import React from "react";
import { Link } from "react-router-dom";

import image01 from "../../assets/images/categories/categories-image01.webp";
import image02 from "../../assets/images/categories/categories-image02.webp";
import image03 from "../../assets/images/categories/categories-image03.webp";
import image04 from "../../assets/images/categories/categories-image04.webp";
import image05 from "../../assets/images/categories/categories-image05.webp";
import image06 from "../../assets/images/categories/categories-image06.webp";

import "./categories.scss";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src={image01} alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src={image02} alt="" />
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src={image03} alt="" />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src={image04} alt="" />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src={image05} alt="" />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src={image06} alt="" />
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
