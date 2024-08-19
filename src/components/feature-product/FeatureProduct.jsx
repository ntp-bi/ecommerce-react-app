import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Grid from "../grid/Grid";
import Card from "../card/Card";

import "./feature-product.scss";

const FeatureProduct = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products?populate=*`,
                    {
                        headers: {
                            Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
                        },
                    }
                );
                
                if (response.data && response.data.data) {
                    setData(response.data.data);
                    console.log(response.data.data);                    
                } else {
                    console.error("Unexpected API response structure:", response);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchData();
    }, []);

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
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

FeatureProduct.propTypes = {
    type: PropTypes.string.isRequired,
};

export default FeatureProduct;
