import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import product from "../../asset/datapizza";

const Navbar = (props) => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const navigation = useNavigate();

    const moveHome = () => {
        navigation("/home");
    };

    useEffect(() => {
        setData(product);
    }, []);

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSnbmitSearch = () => {
        props.searchProduct(search)

    };
    return (
        <div className="Navbar-container">
            <div className="Navbar-logo">
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className="Navbar-menu">
                <ul>
                    <li onClick={moveHome}>HOME</li>
                </ul>
                <ul>
                    <li>MENU </li>
                </ul>
                <ul>
                    <li>SHALE </li>
                </ul>
                <ul>
                    <li>POLICY </li>
                </ul>
                <ul>
                    <li>BLOG </li>
                </ul>
                <ul>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="searchItem">

                <input className='search' type="text" placeholder='Search' 
                value={search}
                onChange={onChangeSearch}
                />
                <span class="icon"><i class="fa fa-search" 
                inverted
                circular
                link
                onClick={onSnbmitSearch}
                ></i></span>
            </div>
            <div className="acount">
            <span className='iconacount'> <i class="fa fa-user" /></span>
            </div>
        </div>
    );
};

export default Navbar;