import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props
  
  return (
    <Route
    {...rest}
    render={(renderProps) => {
      if(localStorage.getItem('token')){
        return <Component {...renderProps}/>
      }else{
        return<Redirect to='/view' />
      }
    }}
    
  />);
 

}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute 
// I'm not sure how to do 2 private routes???