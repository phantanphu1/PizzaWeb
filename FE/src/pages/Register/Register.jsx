import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
    const navigation = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassWord] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);
    const [message, setMessage] = useState("");
    const [story, setStory] = useState("");
    const [data, setData] = useState("");

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleRegister = () => {
        setCheck(true);
        if (username === "" || password === "" || email === "") {
            setCheck(false);
            handleClick();
            setMessage("Không được bỏ trống !!!");
            setStory("warning");
        } else {
            axios
                .post("http://localhost:8000/api/auth/register", {
                    username: username,
                    password: password,
                    email: email,
                })
                .then(function (response) {
                    setCheck(false);
                    handleClick();
                    setMessage("Đăng Kí Thành công !!!");
                    setStory("success");
                    setTimeout(() => {
                        navigation("/");
                    }, 2000);
                })
                .catch(function (error) {
                    setCheck(false);
                    handleClick();
                    setMessage("Đăng kí thất bại !!!");
                    setStory("error");
                });
        }
    };
    return (
        <div className="Home-Registers">
            <div className='Home-Register'>
                <div className="Register">
                    <h1>Login In Form</h1>
                </div>
                {/* <div className="icon">
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
            </div> */}
                <div className="input">
                    <div className="input-names">
                        <input className='input-name' type="text"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            placeholder=' Type your Name' />
                        <span class="icon-name"><i class="fa fa-user"></i></span>
                    </div>
                    <div className="input-names">
                        <input className='input-name' type="text"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder='Type your Email' />
                        <span class="icon-name"><i class="fa fa-envelope"></i></span>
                    </div>
                    <div className="input-names">
                        <input className='input-name' type="password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassWord(e.target.value);
                            }}
                            placeholder=' Type your Password' />
                        <span class="icon-name"><i class="fa fa-eye"></i></span>
                    </div>
                    {/* <div className="input-names">
                        <input className='input-name' type="password" placeholder=' Type your repeat Password' />
                        <span class="icon-name"><i class="fa fa-eye"></i></span>
                    </div> */}
                </div>
                <div className="buton">
                    <button className='btn' onClick={handleRegister}>Register</button>
                </div>
                <div className="login">
                    <span>Have Already An Account ? <button className='btn-click' onClick={() => {
                        navigation("/");
                    }}>Login</button></span>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Register;