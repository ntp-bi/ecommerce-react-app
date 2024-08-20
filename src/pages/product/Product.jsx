import React, { useState } from "react";
import { useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import Helmet from "../../components/helmet/Helmet";
import useFetch from "../../hooks/useFetch";
import numberWithCommas from "../../utils/numberWithCommas";
import "./product.scss";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("image01");
    const [quantity, setQuantity] = useState(1);

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    const updateQuantity = (type) => {
        if (type === "+") {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    return (
        <Helmet title={data?.attributes?.title}>
            <div className="product">
                {loading ? (
                    "loading"
                ) : (
                    <>
                        <div className="product__left">
                            <div className="product__left__images">
                                <img
                                    src={
                                        import.meta.env.VITE_API_UPLOAD_URL +
                                        data?.attributes?.image01?.data?.attributes?.url
                                    }
                                    alt=""
                                    onClick={(e) => setSelectedImg("image01")}
                                />
                                <img
                                    src={
                                        import.meta.env.VITE_API_UPLOAD_URL +
                                        data?.attributes?.image02?.data?.attributes?.url
                                    }
                                    alt=""
                                    onClick={(e) => setSelectedImg("image02")}
                                />
                            </div>
                            <div className="product__left__main">
                                <img
                                    src={
                                        data?.attributes?.[selectedImg]?.data?.attributes
                                            ?.url
                                            ? import.meta.env.VITE_API_UPLOAD_URL +
                                              data.attributes[selectedImg].data.attributes
                                                  .url
                                            : ""
                                    }
                                    alt="Image Preview"
                                />
                            </div>
                        </div>
                        <div className="product__right">
                            <h1 className="product__right__title">
                                {data?.attributes?.title}
                            </h1>
                            <span className="product__right__price">
                                {numberWithCommas(data?.attributes?.price)}đ
                            </span>
                            <p>{data?.attributes?.desc}</p>
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
                    </>
                )}
            </div>
        </Helmet>
    );
};

export default Product;
