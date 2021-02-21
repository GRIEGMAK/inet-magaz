import React from 'react';
import Auth from "./../store/auth"
import {observer} from "mobx-react";

const AuthPage = () => {
    const { login, message } = Auth
    const [checkPass, setCheckPass] = React.useState(false)
    const [emailLog, setEmailLog] = React.useState(undefined)
    const [passLog, setPassLog] = React.useState(undefined)
    const changeEmailHandler = event => {
        setEmailLog({
            ...passLog, [event.target.name]: event.target.value
        })
        setCheckPass(false)
    }
    const changePassHandler = event => {
        setPassLog({
            ...passLog, [event.target.name]: event.target.value
        })
        setCheckPass(false)
    }
    return (
        <div>
            <div>Войти</div>
            <input type="text" name="email" placeholder="Введите email" onChange={changeEmailHandler}/>
            {checkPass
                ?<input type="text" name="password" placeholder="Введите пароль" onChange={changePassHandler}/>
                :<input type="password" name="password" placeholder="Введите пароль" onChange={changePassHandler}/>
            }
            <a onClick={()=>setCheckPass(!checkPass)}>&#128065;</a>
            <button onClick={()=>login(emailLog,passLog)}>Войти</button>
            {message}
        </div>
    )
};

export default observer(AuthPage);