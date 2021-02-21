import React from 'react';
import Header from "./Header";

const HomeScreen = () => {
    return (
        <div>
            <div>
                Привет
            </div>
            <div>
                Вы зашли на главную страницу нашего сайта
            </div>
            <div>
                Здесь вы можете перейти по ссылкам
                <Header />
            </div>
            <div>
                Здесь вы видите наши новости
            </div>
            <div>
                Здесь вы видите топ наших продуктов
            </div>
            <div>
                Здесь вы видите наших партнёров
            </div>
            <div>
                Здесь вы видите наши контакты
            </div>
        </div>
    )
};

export default HomeScreen;
