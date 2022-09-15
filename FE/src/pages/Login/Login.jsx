import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import product from "../../asset/datapizza";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState("");
  const [story, setStory] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogin = () => {
    if (user === "" || pass === "") {
      setCheck(true);
      handleClick();
      setMessage("Không được bỏ trống user or password");
      setStory("warning");
    } else {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username: user,
          password: pass,
        })
        .then(function (response) {
          setCheck(false);
          handleClick();
          setMessage("Đăng Nhập Thành công !!!");
          setStory("success");
          navigation("/home");
        })
        .catch(function (error) {
          setCheck(false);
          handleClick();
          setMessage("Sai user or password !!!");
          setStory("error");
        });

    }
  };

  useEffect(() => {
    setData(product);
  }, []);
  return (
    <div className="Home1">
      <div className='Home-Login'>
        <div className="Login">
          <h1>Sign In Form Test</h1>
        </div>
        <div className="icon">
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
        <div className="input">
          <div className="input-names">
            <input className='input-name' type="text"
              required
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              placeholder='Type your Email' />
            <span class="icon-name"><i class="fa fa-envelope"></i></span>
          </div>
          <div className="input-names">
            <input className='input-name' type={show ? "text" : "password"}
              required
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder=' Type your Password' />
            <span class="icon-name"><i class="fa fa-eye" onClick={() => setShow(!show)}></i></span>

            {/* <span class="icon-name"><i class="fa fa-eye"></i></span> */}
          </div>
        </div>

        <div className="buton">
          <button className='btn' onClick={handleLogin}>Login</button>
        </div>
        <div className="register">
          <span>To Register New Account ? <button className='btn-click' onClick={() => {
            navigation("/register");
          }}>Register</button></span>
        </div>
      </div>
      {/* <GoBack /> */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;