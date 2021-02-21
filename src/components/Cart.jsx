import React from 'react';
import CartProduct from "./CartProduct";
import s from "./../style/MainPart.module.sass"
import {observer} from "mobx-react";

const Cart = (props) => {
    const {store} = props
    const { cart, descriptionAdd, rmProductInCart } = store
    let getCard = undefined
    if(cart){
        getCard = cart.map((cart, i)=><CartProduct key={i} {...cart} descriptionAdd={descriptionAdd} rmProductInCart={rmProductInCart}/>)
    }
    return (
        <div>
            <div className={s.container}>
                <div className={s.card}>
                    {getCard}
                </div>
            </div>
        </div>
    )
};

export default observer(Cart);
