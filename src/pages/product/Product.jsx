import React, { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import image01 from "../../assets/images/products/product-01 (1).jpg";
import image02 from "../../assets/images/products/product-01 (2).jpg";

import "./product.scss";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(image01);
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === "+") {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    return (
        <div className="product">
            <div className="product__left">
                <div className="product__left__images">
                    <img src={image01} alt="" onClick={() => setSelectedImg(image01)} />
                    <img src={image02} alt="" onClick={() => setSelectedImg(image02)} />
                </div>
                <div className="product__left__main">
                    <img src={selectedImg} alt="" />
                </div>
            </div>
            <div className="product__right">
                <h1 className="product__right__title">Áo thun Dinosaur 01</h1>
                <span className="product__right__price">289.000đ</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
                <div className="product__right__quantity">
                    <button onClick={() => updateQuantity("-")}>-</button>
                    {quantity}
                    <button onClick={() => updateQuantity("+")}>+</button>
                </div>
                <button className="product__right__btn--add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="product__right__links">
                    <div className="product__right__links__item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="product__right__links__item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="product__right__info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="product__right__info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
