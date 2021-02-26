import React from "react";
import Auth from "../store/auth";

const Form = (props) => {
    const { addNewCard, newElement, setBtnAdd, btnAdd, refactorMessage } = props
    const refactor = () =>{
        refactorMessage(newElement)
        setBtnAdd(false)
    }
    const { getUserData } = Auth
    let userData = []
    getUserData(userData)
    const { userName } = {...Reflect.get(userData, 0)}
    return (
        <div>
            <input type="text" placeholder="Введите сообщение..." ref={newElement}/>
            {!btnAdd
                ?<button onClick={()=>addNewCard(newElement, userName)}>Добавить</button>
                :<button onClick={()=>refactor()}>Редактировать</button>
            }
        </div>
    )
};

export default Form;