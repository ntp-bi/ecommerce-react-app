import React from "react";
import PropTypes from "prop-types";

import Grid from "../grid/Grid";
import Card from "../card/Card";

import useFetch from "../../hooks/useFetch";

import "./feature-product.scss";

const FeatureProduct = (props) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${props.type}`
    );

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
            <div className="feature-product__content">
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {error
                        ? "Something went wrong!"
                        : loading
                        ? "loading"
                        : data.map((item) => <Card key={item.id} item={item} />)}
                </Grid>
            </div>
        </div>
    );
};

FeatureProduct.propTypes = {
    type: PropTypes.string.isRequired,
};

export default FeatureProduct;
