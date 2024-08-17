import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

import "./card.scss";

const Card = (props) => {
    const item = props.item;

    return (
        <Link to={`/product/${item.id}`} className="card">
            <div className="card__wrapper">
                <div className="card__wrapper__image">
                    <img src={item.image01} alt="" />
                    <img src={item.image02} alt="" />
                </div>
                <h3 className="card__wrapper__title">{item.title}</h3>
                <div className="card__wrapper__prices">
                    <span className="card__wrapper__prices__old">
                        <del>{numberWithCommas(item.oldPrice)}đ</del>
                    </span>
                    {numberWithCommas(item.price)}đ
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
};

export default Card;
