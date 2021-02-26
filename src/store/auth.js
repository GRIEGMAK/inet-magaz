import {makeAutoObservable} from "mobx";

const storageName = 'userData'

class Auth{
    serverData = []
    message = undefined
    isAuthentication = false
    userData=[]
    useDataDisband=0
    constructor(){
        makeAutoObservable(this)
    }
    server = async () => {
        let response = await fetch(`/users.json`)
        this.serverData = await response.json()
    }
    login = (email, password) => {
        this.userData.clear()
        this.serverData.map(el => email.email === el.email ? this.userData.push(el) : el)
        if (this.userData.length === 0) {
            return this.message = "Неверный email"
        } else {
            this.useDataDisband += 1
        }
        this.userData.map(el => password.password === el.password ? this.useDataDisband += 1 : this.message = "Неверный пароль")
       
        if (this.useDataDisband === 2) {
            this.isAuthentication = true
            this.message = "Успешно"
            localStorage.setItem(storageName, JSON.stringify({
                email:email, password:password
            }))
            this.useDataDisband = 0
        }
        console.log(this.useDataDisband)
    }
    getUserData = (userData) => {
        userData.push(...this.userData)
        return userData
    }
    logout = () => {
        this.serverData = []
        this.userData = []
        this.useDataDisband = 0
        this.isAuthentication = false
        this.message = undefined
        localStorage.removeItem(storageName)
    }
    checked = () => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.email) {
            this.login(data.email, data.password)
        }
    }

}

export default new Auth()