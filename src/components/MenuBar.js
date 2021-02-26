import React from 'react'
import Auth from './../store/auth'
import MainPart from "./MainPart";
import store from './../store/store'
import Rubbish from "../store/Rubbish";
import s from './../styles/MenuBar.module.sass'

const MenuBar = () => {
    React.useEffect(()=>{
        store.setMessage();
        Rubbish.setMessage();
    })
    const { getUserData, logout } = Auth
    let userData = []
    getUserData(userData)
    const {userId, userName} = {...Reflect.get(userData, 0)}
    return (
        <div>
            <button onClick={logout}>Выйти</button>
            <div className={s.header}>
                <div className={s.logo}>
                    IdChat
                </div>
                <div>
                    Привет, {userName}
                </div>
            </div>
            <div>
                <div className={s.chat}>
                    <div className={s.talk}>
                        <MainPart store={store}/>
                    </div>
                    <div className={s.talk}>
                        <MainPart store={Rubbish}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
