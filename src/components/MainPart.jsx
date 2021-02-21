import React from 'react';
import Card from "./Card";
import {observer} from "mobx-react";
import s from "./../style/MainPart.module.sass"

const MainPart = (props) => {
        const [addNewProd, setAddNewProd] = React.useState(false)
        const [newProd, setNewProd] = React.useState({
            title: '', image: '', price: '', group: '', brand: '', description: '', count: '', indexId: ''
        })

        const {store} = props
        const {addNewProduct, products, addInCart, descriptionAdd, rmProduct, addNewProductNotDefault, sendClean, copyProd} = store
        let getCard = undefined
        if (products) {
            getCard = products.map((products, i) => <Card key={i}
                                                          {...products}
                                                          addInCart={addInCart}
                                                          descriptionAdd={descriptionAdd}
                                                          rmProduct={rmProduct}
                                                          copyProd={copyProd} />)
        }
        const changeBox = (event) => {
            setNewProd({
                ...newProd, [event.target.name]: event.target.value
            })
        }
        const addProd = () => {
            addNewProductNotDefault(newProd)
            console.log("djhvcj")
        }
        const formAdd = () => {
            if (!addNewProd) {
                return (
                    <div>
                        <button onClick={addNewProduct}>Добавить</button>
                        <a onClick={() => setAddNewProd(true)}>Добавить не по умолчанию</a>
                    </div>
                )
            } else {
                return (
                    <div>
                        <form>
                            <a onClick={() => setAddNewProd(false)}>Добавить по умолчанию</a>
                            <input type="text" name="title" placeholder="Введите название" onChange={changeBox}/>
                            <input type="text" name="image" placeholder="Введите ссылку на картинку" onChange={changeBox}/>
                            <input type="text" name="price" placeholder="Введите цену" onChange={changeBox}/>
                            <input type="text" name="group" placeholder="Введите категорию" onChange={changeBox}/>
                            <input type="text" name="brand" placeholder="Введите бренд" onChange={changeBox}/>
                            <input type="text" name="description" placeholder="Введите описание" onChange={changeBox}/>
                            <input type="text" name="count" placeholder="Введите количество" onChange={changeBox}/>
                            <input type="text" name="indexId" placeholder="Введите идентификатор" onChange={changeBox}/>
                            <button onClick={() => addProd()}>Добавить свое</button>
                        </form>
                    </div>
                )
            }
        }
        return (
            <div>
                {formAdd()}
                <div className={s.container}>
                    <div className={s.card}>
                        {getCard}
                    </div>
                </div>
            </div>
        )
    }
;

export default observer(MainPart);
