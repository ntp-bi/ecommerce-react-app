import React from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import numberWithCommas from '../../utils/numberWithCommas';
import productData from "../../assets/fake-data/products";
import "./cart.scss";

const Cart = () => {
    return (
        <div className="cart">
            <h1>Product in your cart</h1>
            {productData.getProducts(3).map((item) => (
                <div className="cart__item" key={item.id}>
                    <img src={item.image01} alt="" />
                    <div className="cart__item__details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="cart__item__details__price">
                            1 x {numberWithCommas(item.price)}đ
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="cart__delete" />
                </div>
            ))}
            <div className="cart__total">
                <span>SUBTOTAL</span>
                <span>123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="cart__reset">Reset Cart</span>
        </div>
    );
};

export default Cart;
