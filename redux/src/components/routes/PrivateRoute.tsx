import React,{Component} from 'react';
import {
    Link,
    Route,
    Navigate,
} from "react-router-dom";
/*
interface PrivateRouteParams{
        element:Component,
        redirectTo:string,
        isAuth:boolean,
        path:string,
        props?:any
}*/
export default  function PrivateRoute({ children,
                          redirectTo,
                          isAuth,
                          path, ...props }:any)  {

    console.log('Is authen ',isAuth);
    return isAuth ? children : <Navigate to={redirectTo} />;
}
