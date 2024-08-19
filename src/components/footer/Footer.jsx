import React from "react";
import { Link } from "react-router-dom";
import Grid from "../grid/Grid";

import paymentImg from "../../assets/images/payment.png";
import "./footer.scss";

const categoryFooter = [
    {
        display: "Women",
        path: "/products/:1",
    },
    {
        display: "Men",
        path: "/products/:1",
    },
    {
        display: "Shoes",
        path: "/products/:1",
    },
    {
        display: "Accessories",
        path: "/accessories",
    },
    {
        display: "New Arrivals",
        path: "/new_arrival",
    },
];

const linkCategory = [
    {
        display: "FAQ",
        path: "/faq",
    },
    {
        display: "Pages",
        path: "/pages",
    },
    {
        display: "Stores",
        path: "/stores",
    },
    {
        display: "Compare",
        path: "/compare",
    },
    {
        display: "Cookies",
        path: "/cookies",
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Grid col={4} mdCol={2} smCol={2} gap={40}>
                    <div>
                        <h3 className="footer__title">Categories</h3>
                        <div className="footer__content">
                            {categoryFooter.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="footer__title">Links</h3>
                        <div className="footer__content">
                            {linkCategory.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="footer__title">About</h3>
                        <div className="footer__content">
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore.
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                seddo eiusmod tempor incididunt ut labore etdolore.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer__title">Contact</h3>
                        <div className="footer__content">
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore.
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                seddo eiusmod tempor incididunt ut labore etdolore.
                            </p>
                        </div>
                    </div>
                </Grid>
                <div className="footer__bottom">
                    <div className="footer__bottom__left">
                        <span className="logo">Ntpstore</span>
                        <span className="copyright">© Nguyễn Tâm Phước</span>
                    </div>
                    <div className="footer__bottom__right">
                        <img src={paymentImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
