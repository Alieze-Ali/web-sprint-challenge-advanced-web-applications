import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    // Basic Routing
    <Router>

        <AppContainer>
          <LambdaHeader/>
            <Header/>
              <RouteContainer>
              
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Login} />
                  
                  {/* </Route>      */}
                <PrivateRoute path="/view" component={View} />
                <PrivateRoute path="/logout" component={Logout}/>     
              </RouteContainer>
        </AppContainer>

    </Router>
    
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component. ok I think???
//2. Create a Route for Login pointing to '/login.' - ok
//3. Create a PrivateRoute for View component point to '/view.' ok
//4. Create a PrivateRoute for Logout component pointing to '/logout.'-ok


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
