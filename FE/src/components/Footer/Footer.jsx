import React from 'react';
import "./Footer.scss";
const Footer = () => {
    return (
        <div className='Footer-Container'>
            <div className="Footer">
                <div className="Footer-conten">
                    <b>CONTACTS</b>
                    <div className="Footer-center">
                        <div className="Footer-center-icon">
                            <span className='iconname'> <i class="fa fa-home" /></span>
                            <ul><li>Address: Quận 1 Bình Thạnh TP HCM</li></ul>
                        </div>
                        <div className="Footer-center-icon">
                            <span className='iconname'> <i class="fa fa-phone" /></span>
                            <ul><li>Phone: 0835129813</li></ul>
                        </div>
                        <div className="Footer-center-icon">
                            <span className='iconname'> <i class="fa fa-envelope"></i></span>
                            <ul><li>Email: Pizzaname@gmail.com </li></ul>
                        </div>
                    </div>
                </div>
                <div className="Footer-conten">
                    <b>CATEGORIES</b>
                    <div className="Footer-center2">
                        <ul><li>HTML</li></ul>
                    </div>
                    <div className="Footer-center2">
                        <ul><li>CSS/SCSS</li></ul>

                    </div>
                    <div className="Footer-center2">
                        <ul><li>Reactjs</li></ul>
                    </div>
                </div>
                <div className="Footer-conten">
                    <b>QUICK LINKS</b>
                    <div className="Footer-center3">
                        <ul><li>HOME</li></ul>
                    </div>
                    <div className="Footer-center3">
                        <ul><li>MENU</li></ul>

                    </div>
                    <div className="Footer-center3">
                        <ul><li>BLOG</li></ul>
                    </div>
                    <div className="Footer-center3">
                        <ul><li>CONTACT</li></ul>
                    </div>
                </div>
                <div className="Footer-conten">
                    <b>CONTACTS</b>
                    <div className="Footer-conten-item">
                        <div className="social-icon">
                            <ul>
                                <li><a href=""><i class="fa fa-facebook"></i></a></li>
                            </ul>
                        </div>
                        <div className="social-icon">
                            <ul>
                                <li><a href=""><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <div className="social-icon">
                            <ul>
                                <li><a href=""><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="social-icon">
                            <ul>
                                <li><a href=""><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="design">
                <span>design:By Phan Tấn Phú</span>
            </div>
        </div>
    );
};

export default Footer;