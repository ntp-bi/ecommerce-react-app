import React from "react";
import PropTypes from "prop-types";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./button.scss";

const Button = (props) => {
    const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : "bg-main";
    const animate = props.animate ? "btn-animate" : "";
    const size = props.size ? `btn-${props.size}` : "";

    return (
        <button
            className={`btn ${bg} ${animate} ${size}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className="btn__txt">{props.children}</span>
            {props.icon ? (
                <span className="btn__icon">
                    <ShoppingCartIcon className={props.icon} />
                </span>
            ) : null}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
};

export default Button;
