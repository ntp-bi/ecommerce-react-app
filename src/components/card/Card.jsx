import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Button from "../button/Button";
import "./card.scss";

const Card = (props) => {
    const item = props.item;

    return (
        <Link to={`/product/${item.id}`} className="card">
            <div className="card__wrapper">
                <div className="card__wrapper__image">
                    <img
                        src={
                            import.meta.env.VITE_API_UPLOAD_URL +
                            item.attributes?.image01?.data?.attributes?.url
                        }
                        alt=""
                    />
                    <img
                        src={
                            import.meta.env.VITE_API_UPLOAD_URL +
                            item.attributes?.image02?.data?.attributes?.url
                        }
                        alt=""
                    />
                </div>
                <h3 className="card__wrapper__title">{item.attributes?.title}</h3>
                <div className="card__wrapper__prices">
                    <span className="card__wrapper__prices__old">
                        <del>
                            {numberWithCommas(item.attributes?.oldPrice) ||
                                numberWithCommas(item.attributes?.price + 100000)}
                            đ
                        </del>
                    </span>
                    {numberWithCommas(item.attributes?.price)}đ
                </div>
                <Button size="sm" animate={true} icon={<ShoppingCartIcon />}>
                    buy now
                </Button>
            </div>
        </Link>
    );
};

export default Card;
