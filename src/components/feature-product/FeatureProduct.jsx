import React from "react";
import PropTypes from "prop-types";
import "./feature-product.scss";

const FeatureProduct = (props) => {
    return (
        <div className="feature-product">
            <div className="feature-product__header">
                <h1>{props.type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>           
        </div>
    );
};

FeatureProduct.propTypes = {
    type: PropTypes.string.isRequired,    
};

export default FeatureProduct;
