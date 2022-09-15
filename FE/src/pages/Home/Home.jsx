import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Card from "../../components/Card/Card";
import product from "../../asset/datapizza";
import appetizer from "../../asset/dataAppetizer";
import Appetizer from "../../components/Appetizer/Appetizer";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import CardProduct from "../../components/CardProduct/CardProduct";

import "./Home.scss";
const Home = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);

    useEffect(() => {
        setData(product);
        setData1(appetizer)
    }, []);

    const searchProduct = search => {
        setData(
            product.filter(item =>
                item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        );
    };
    return (
        <div className="home">
            <Navbar searchProduct={searchProduct} />
            {/* <CardProduct/> */}
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://img.dominos.vn/Veggie-mania.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.dominos.vn/Veggie-mania.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.dominos.vn/Veggie-mania.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.dominos.vn/Veggie-mania.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.dominos.vn/Veggie-mania.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </>
            <div className="home-Page">
                {data.map((item) => (
                    <Card product={item}></Card>
                ))}
            </div>
            <hr style={{ width: "90%" }} />
            <div className="Text">
                <b>Appetize</b>
            </div>
            <div className="home-Main">
                {data1.map((nameitem) => (
                    <Appetizer appetizer={nameitem}></Appetizer>
                ))}
            </div>
            <Footer />

        </div>
    );
};

export default Home;