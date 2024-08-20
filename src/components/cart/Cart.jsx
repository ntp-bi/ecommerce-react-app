import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import numberWithCommas from "../../utils/numberWithCommas";
import "./cart.scss";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);

    const totalPrice = () => {
        let total = 0;
        products.forEach((product) => (total += product.quantity * product.price));
        return total;
    };

    return (
        <div className="cart">
            <h1>Product in your cart</h1>
            {products.map((item) => (
                <div className="cart__item" key={item.id}>
                    <img
                        src={import.meta.env.VITE_API_UPLOAD_URL + item.image01}
                        alt=""
                    />
                    <div className="cart__item__details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="cart__item__details__price">
                            {item.quantity} x {numberWithCommas(item.price)}đ
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="cart__delete"
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className="cart__total">
                <span>SUBTOTAL</span>
                <span>{numberWithCommas(totalPrice())}đ</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="cart__reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;
