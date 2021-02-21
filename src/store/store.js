import {makeAutoObservable} from "mobx";

class Store{
    products=[]
    index = 1
    cart=[]
    descriptions=[]
    bId = undefined
    date = undefined
    topProd = undefined
    sendClean = false
    copyElement = []
    refactorId = undefined
    constructor() {
        makeAutoObservable(this)
    }
    addNewProduct = () => {
        if(this.index){
            this.date = undefined
            this.date = new Date()
            this.products.push(
                {
                    id: this.index,
                    indexId: 669293879,
                    title: "Пример",
                    image: "Картинка",
                    price: 200,
                    group: "пчеловодные товары",
                    brand: "ООО Бипром",
                    description: "undefined",
                    rating: 3.92,
                    count: 2,
                    placementDate: Date.parse(this.date),
                    placementTime: this.date.toString(),
                    refactor: false,
                    refactorDate: undefined,
                    refactorTime: undefined
                }
            )
            this.index = this.index + 1
        }
    }
    addNewProductNotDefault = (newProd) => {
        const {title, image, price, group, brand, description, count, indexId} = newProd
        console.log(title)
        if(this.index){
            this.date = undefined
            this.date = new Date()
            this.products.push(
                {
                    id: this.index,
                    indexId: indexId,
                    title: title,
                    image: image,
                    price: price,
                    group: group,
                    brand: brand,
                    description: description,
                    rating: 5,
                    count: count,
                    placementDate: Date.parse(this.date),
                    placementTime: this.date.toString(),
                    refactor: false,
                    refactorDate: undefined,
                    refactorTime: undefined
                }
            )
            this.index = this.index + 1
        }

    }
    addInCart = (id) => {
        this.products.map(el => el.id === id ? this.cart.push({...el}) : el)
        this.cart.map(el => el.id === id ? Reflect.set(el, el.count, 1) : el)
        this.products.map(el => el.id === id ? Reflect.set(el, el.count, el.count-1) : el)
    }
    rmProduct = (id) => {
        this.products = this.products.filter(el => el.id !== id)
    }
    rmProductInCart = (id) => {
        this.cart = this.cart.filter(el => el.id !== id)
        this.products.map(el => el.id === id ? Reflect.set(el, el.count, el.count+1) : el)

    }
    descriptionAdd = (id) => {
        this.bId = id
        this.descriptions.clear()
        this.products.map(el => el.id === id ? this.descriptions.push({...el}) : el)
    }
    prepRefactor = (el, newElement) => {
        Reflect.set(el, "", newElement.current.value)
    }
    copyProd = (id) => {
        this.copyElement.clear()
        this.refactorId=id
        this.products.map(el => el.id === id ? this.copyElement.push({...el}) : el)
        console.log(Reflect.get(this.copyElement, 0))
    }
    refactor = (array, newElement, id, box) => {
        array.map(el => el.id === id ? Reflect.set(el, box, newElement.current.value) : el)
    }
}

export default new Store()