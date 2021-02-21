import React from 'react';
import s from "../style/Header.module.sass"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/products">Продукция</NavLink>
            <NavLink to="/AboutCompany">О компании</NavLink>
            <NavLink to="/Cart">Корзина</NavLink>
            <NavLink to="/home">Главная страница</NavLink>
            <NavLink to="/auth">Войти</NavLink>
            Магазин Пчеловодства
        </div>
    )
};

export default Header;