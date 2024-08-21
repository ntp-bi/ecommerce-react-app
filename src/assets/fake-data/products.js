import product_01_image_01 from "../images/products/product-01 (1).jpg";
import product_01_image_02 from "../images/products/product-01 (2).jpg";
// import product_01_image_03 from '../images/products/product-01 (3).jpg';

import product_02_image_01 from "../images/products/product-02 (1).jpg";
import product_02_image_02 from "../images/products/product-02 (2).jpg";

import product_03_image_01 from "../images/products/product-03 (1).jpg";
import product_03_image_02 from "../images/products/product-03 (2).jpg";

import product_04_image_01 from "../images/products/product-04 (1).jpg";
import product_04_image_02 from "../images/products/product-04 (2).jpg";

import product_05_image_01 from "../images/products/product-05 (1).jpg";
import product_05_image_02 from "../images/products/product-05 (2).jpg";

const products = [
    {
        id: 1,
        image01: product_01_image_01,
        image02: product_01_image_02,
        title: "Áo thun Dinosaur 01",
        isNew: true,
        oldPrice: "289000",
        price: "189000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",        
    },
    {
        id: 2,
        image01: product_02_image_01,
        image02: product_02_image_02,
        title: "Áo thun Dinosaur 02",
        isNew: false,
        oldPrice: "289000",
        price: "189000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",        
    },
    {
        id: 3,
        image01: product_03_image_01,
        image02: product_03_image_02,
        title: "Áo thun Dinosaur 03",
        isNew: false,
        oldPrice: "289000",
        price: "189000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",        
    },
    {
        id: 4,
        image01: product_04_image_01,
        image02: product_04_image_02,
        title: "Áo thun Dinosaur 04",
        isNew: true,
        oldPrice: "289000",
        price: "189000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",        
    },
    {
        id: 5,
        image01: product_05_image_01,
        image02: product_05_image_02,
        title: "Áo thun Dinosaur 05",
        isNew: true,
        oldPrice: "289000",
        price: "189000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",        
    },
];

const getAllProducts = () => products;

const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
};

const productData = {
    getAllProducts,
    getProducts,
};

export default productData;
