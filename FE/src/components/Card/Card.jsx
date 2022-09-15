import React, { useState, useEffect } from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import product from "../../asset/datapizza";
const Card = (props) => {
    const navigation = useNavigate()

    const item = props.product;

    const handlemoveaddcarrd = () =>{
        navigation(`/home/cardProduct/${item.id}`)
      }
    return (
        <div className="Card-Container">
            <img className="image" src={item.img} />
            <h4 className="name">{item.name}</h4>
            <h4 className="price">{item.price}</h4>
            <button className="btn" onClick={handlemoveaddcarrd}> Add Card</button>
            <div class="stars">
                <form action="">
                    <input class="star star-5" id="star-5" type="radio" name="star" />
                    <label class="star star-5" for="star-5"></label>
                    <input class="star star-4" id="star-4" type="radio" name="star" />
                    <label class="star star-4" for="star-4"></label>
                    <input class="star star-3" id="star-3" type="radio" name="star" />
                    <label class="star star-3" for="star-3"></label>
                    <input class="star star-2" id="star-2" type="radio" name="star" />
                    <label class="star star-2" for="star-2"></label>
                    <input class="star star-1" id="star-1" type="radio" name="star" />
                    <label class="star star-1" for="star-1"></label>
                </form>
            </div>
        </div>

    );
};

export default Card;





