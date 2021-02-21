import React from 'react';
import s from "./../style/Card.module.sass"
import store from "../store/store";

const Description = () => {
    const { descriptions } = store
    const {id, title, image, description, price, rating, addInCart } = {...Reflect.get(descriptions, 0)}
    return (
        <div className={s.card}>
            <div>{id}</div>
            <div>{image}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{rating}</div>
            <div>{description}</div>
            <button onClick={()=>addInCart(id)}>Добавить в корзину</button>
        </div>
    )
};

export default Description;
