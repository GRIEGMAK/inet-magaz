import {makeAutoObservable} from "mobx";

class Auth{
    email = "g.m.ak@yandex.ru"
    password = "12345678"
    message = undefined
    isAuthentication = false
    constructor(){
        makeAutoObservable(this)
    }
    login = (email, password) => {
        if(email.email!==this.email){
            return this.message = "Неверный email"
        }else if(password.password!==this.password){
            return this.message = "Неверный пароль"
        }
        else {this.isAuthentication=true}
    }
    logout = () => {
        this.isAuthentication = false
    }

}

export default new Auth()