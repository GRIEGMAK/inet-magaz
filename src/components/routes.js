import React from 'react'
import {Switch, Route} from "react-router";
import AuthPage from "./AuthPage";
import {Redirect} from "react-router-dom";
import MenuBar from "./MenuBar";

export const useRoutes = isAuthentication => {
    if (isAuthentication) {
        return (
            <Switch>
                <Route exact path="/00first">
                    <MenuBar/>
                </Route>
                <Redirect from="/" to="/00first"/>
            </Switch>
    )
    } else
        {
            return (
                <Switch>
                    <Route exact path="/">
                        <AuthPage/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            )
        }

    }