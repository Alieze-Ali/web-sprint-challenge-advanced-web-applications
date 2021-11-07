//import React from 'react';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Logout = () => {        
    
    
    return(
    <div>
        <h1>Logout</h1>
        <button
            id="submit"
            type="submit">
            Logout
        </button>
    </div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.