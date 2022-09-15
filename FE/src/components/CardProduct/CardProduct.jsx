import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CardProduct.scss";
import Navbar from '../Navbar/Navbar';
import product from '../../asset/datapizza';
import datapizza from "../../asset/datapizza";
import Footer from "../Footer/Footer";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const CardProduct = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const IdUser = localStorage.getItem("IdUser");
    const username = localStorage.getItem("username");
    const [story, setStory] = useState("");

    const idPizza = location.pathname.split("/home/cardProduct/")[1];
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }
    // useEffect(() => {
    //     setData(datapizza.find(e => e.id == idPizza));
    // }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get(`http://localhost:8000/api/addpizza/${idPizza}`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log("lỗi :", error);
            });
    }, []);

    const handleAddCart = () => {
        axios.post("http://localhost:8000/api/cart/addCart", {
            idpizza: idPizza,
            namepizza: data.namepizza,
            price: data.price,
            IdUser: IdUser,
        })
            .then(function (response) {
                setShow(true);
                alert("thành công");

                // setMessage("Bạn đã đặt hàng thành công");
                setOpen(false);
            })
            .catch(function (response) {
                setShow(true);
                alert("thất bại");

                // setMessage("Bạn đã đặt hàng thất bại");
                setOpen(false);
            })
    };
    return (
        <div className="CardProduct">
            <Navbar />
            <div className='CardProduct_Container'>
                <div className="conten">
                    <h1 className="TT">Thông Tin Sản Phẩm</h1>
                    <hr style={{ width: "80%" }} />

                </div>
                <div className="Mains">
                    <div className="Main-img">
                        <p><img src={data.img} /></p>
                        {/* </div> */}
                        {/* <div className="name"> */}
                        <p className="price"> Price : {data.price}</p>
                    </div>
                    <div className="specifications">
                        {/* <hr style={{ width: "5%" }} /> */}
                        <p className="name">{data.name}</p>
                        <span className="KT">Kích thước <br /></span>
                        <span>Thành phần chính : {data.gt}</span>
                        <div className="CKTS">
                            <div className="CKT">
                                <button>Nhỏ 6"</button>
                            </div>
                            <div className="CKT">
                                <button>Vừa 9"</button>
                            </div>
                            <div className="CKT">
                                <button>Lớn 12"</button>
                            </div>
                        </div>
                        <div className="GC">
                            <span>GHI CHÚ <br /></span>
                            <textarea cols="20" rows="10" placeholder="Nhập ghi chú của bạn ở đây ?"></textarea>
                        </div>
                        <div className="btn">
                            <button onClick={handleAddCart}>THÊM VÀO GIỎ HÀNG </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
        </div>
    );
};

export default CardProduct;