import React from "react";
import Card from "../card/Card";
import Grid from "../grid/Grid";
import productData from "../../assets/fake-data/products";

const List = () => {
    return (
        <div className="list">
            <Grid col={4} mdCol={3} smCol={1} gap={20}>
                {productData.getAllProducts().map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </Grid>
        </div>
    );
};

export default List;
