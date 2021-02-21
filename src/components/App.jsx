import React from 'react';
import {BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import MainPart from "./MainPart";
import Cart from "./Cart";
import store from "./../store/store"
import HomeScreen from "./HomeScreen";
import AuthPage from "./AuthPage";
import auth from "../store/auth";
import {observer} from "mobx-react";
import Description from "./Description";

const App = () => {
    const {bId} = store
    const {isAuthentication} = auth
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/auth">
                    {!isAuthentication
                        ? <AuthPage/>
                        : <Redirect to="/home" />
                    }
                </Route>
                <Route exact path="/home">
                    <HomeScreen />
                </Route>
                <Route exact path={'/description/' + bId}>
                    <Description />
                </Route>
                <Route exact path="/products">
                    <Header />
                    <MainPart store={store}/>
                </Route>
                <Route exact path="/AboutCompany">
                    <Header />
                </Route>
                <Route exact path="/Cart">
                    <Header />
                    <Cart store={store}/>
                </Route>
            </Switch>
            <Redirect to="/home" />
        </BrowserRouter>
    )
};

export default observer(App);
