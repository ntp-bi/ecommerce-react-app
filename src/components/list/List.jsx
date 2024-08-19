import React from "react";
import Card from "../card/Card";
import Grid from "../grid/Grid";
import useFetch from "../../hooks/useFetch";

const List = (props) => {
    // Chuyển đổi maxPrice thành chuỗi và sau đó loại bỏ dấu phẩy (nếu có)
    const sanitizedPrice = props.maxPrice.toString().replace(/,/g, "");

    const subCategoryFilters =
        props.subCats.length > 0
            ? props.subCats
                  .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
                  .join("")
            : "";

    const sortQuery = props.sort ? `&sort=price:${props.sort}` : "";

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${props.id}${subCategoryFilters}&[filters][price][$lte]=${sanitizedPrice}${sortQuery}`
    );

    return (
        <div className="list">
            <Grid col={4} mdCol={3} smCol={1} gap={20}>
                {error
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data.map((item) => <Card key={item.id} item={item} />)}
            </Grid>
        </div>
    );
};

export default List;
