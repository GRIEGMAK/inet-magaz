import React from 'react';
import s from "./../style/Card.module.sass"
import {NavLink} from "react-router-dom";

const Card = (props) => {
    const {id, title, image, price, rating, addInCart, descriptionAdd, rmProduct, copyProd} = props
    return (
        <div className={s.card}>
            <div>{id}</div>
            <div>{image}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{rating}</div>
            <button onClick={()=>addInCart(id)}>Добавить в корзину</button>
            <NavLink to={'/description/'+ id}><button onClick={()=>descriptionAdd(id)}>Подробнее</button></NavLink>
            <button onClick={()=>copyProd(id)}>Редактировать</button>
            <button onClick={()=>rmProduct(id)}>удоли</button>
        </div>
    )
};

export default Card;
