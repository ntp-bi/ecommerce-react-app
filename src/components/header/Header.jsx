import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import logoLeft from "../../assets/images/en.png";

import "./header.scss";

const leftNav = [
    {
        display: <img src={logoLeft} alt="" />,
        path: "/",
        icon: <KeyboardArrowDownIcon />,
    },
    {
        display: "USD",
        path: "/usd",
        icon: <KeyboardArrowDownIcon />,
    },
    {
        display: "Men",
        path: "/products/1",
    },
    {
        display: "Women",
        path: "/products/2",
    },
    {
        display: "Children",
        path: "/products/3",
    },
    {
        display: "Accessories",
        path: "/accessories",
    },
];

const rightNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "About",
        path: "/about",
    },
    {
        display: "Contact",
        path: "/contact",
    },
    {
        display: "Stores",
        path: "/stores",
    },
];

const Header = () => {
    const { pathname } = useLocation();

    const headerRef = useRef(null);
    const rightMenuRef = useRef(null);

    const activeLeftNav = leftNav.findIndex((e) => e.path === pathname);
    const activeRightNav = rightNav.findIndex((e) => e.path === pathname);

    const menuToggle = () => {
        rightMenuRef.current.classList.toggle("active");
    };

    const shirnkHeader = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add("shrink");
        } else {
            headerRef.current.classList.remove("shrink");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", shirnkHeader);

        return () => {
            window.removeEventListener("scroll", shirnkHeader);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <nav className="container">
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <MenuOutlinedIcon />
                    </div>
                    <div className="header__menu__left">
                        {leftNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item ${
                                    index === activeLeftNav ? "active" : ""
                                }`}                               
                            >
                                <Link to={item.path} className="header__menu__left__item">
                                    {item.display}
                                    {item.icon ? item.icon : null}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__center">
                        <Link to="/">NTPSTORE</Link>
                    </div>
                    <div className="header__menu__right" ref={rightMenuRef}>
                        <div className="header__menu__right__close" onClick={menuToggle}>
                            <ArrowBackIosNewOutlinedIcon />
                        </div>
                        {rightNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item ${
                                    index === activeRightNav ? "active" : ""
                                }`}
                                onClick={menuToggle}
                            >
                                <Link
                                    to={item.path}
                                    className="header__menu__right__item"
                                >
                                    {item.display}
                                </Link>
                            </div>
                        ))}
                        <div className="header__menu__right__item">
                            <SearchIcon className="header__menu__right__item__icon" />
                            <PersonOutlineOutlinedIcon className="header__menu__right__item__icon" />
                            <FavoriteBorderOutlinedIcon className="header__menu__right__item__icon" />
                            <div className="cart-icon">
                                <ShoppingCartOutlinedIcon className="header__menu__right__item__icon" />
                                <span className="cart-badge">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
