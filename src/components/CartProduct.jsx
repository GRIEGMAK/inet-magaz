import React from 'react';
import s from "./../style/Card.module.sass"
import {NavLink} from "react-router-dom";

const CartProduct = (props) => {
    const {id, title, image, price, rating, descriptionAdd, rmProductInCart} = props
    return (
        <div className={s.card}>
            <div>{id}</div>
            <div>{image}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{rating}</div>
            <NavLink to={'/description/'+ id}><button onClick={()=>descriptionAdd(id)}>Подробнее</button></NavLink>
            <button onClick={()=>rmProductInCart(id)}>Удалить</button>
        </div>
    )
};

export default CartProduct;
