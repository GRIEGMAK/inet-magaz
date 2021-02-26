import React, {useEffect} from 'react'
import Auth from "./../store/auth"
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react";

const App = () => {
  const { isAuthentication, checked } = Auth
  const routes = useRoutes(isAuthentication)
  useEffect(checked)
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default observer(App);
