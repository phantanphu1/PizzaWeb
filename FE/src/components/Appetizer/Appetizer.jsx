import React from 'react';
import appetizer from '../../asset/dataAppetizer';
import "./Appetizer.scss";
const Appetizer = (props) => {
    const nameitem = props.appetizer;
    return (
        <div className='Appetize-Container'>
            <img className="image" src={nameitem.img} />
            <b className='text'>{nameitem.name}</b>
            <div className="reviews">
                <span className='review'> {nameitem.review}</span>
            </div>
            <div className="buttton-review">
                <button className='btn'>Review</button>
            </div>
        </div>
    );
};

export default Appetizer;