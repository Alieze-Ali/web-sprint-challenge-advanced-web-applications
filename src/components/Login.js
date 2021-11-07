import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {

    // state
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const { push } = useHistory();

    // token request and redirect
    const handleSubmit = (evt) => {
        evt.preventDefault()
        axiosWithAuth()
        .post(`http://localhost:5000/api/login`, form)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            console.log(res)
            push('/view')
        })
        .catch(err => setError(err.response.data.error))
    }

    // input changes
    const handleChange = (evt) => {
        setForm({
                ...form,
                [evt.target.name]: evt.target.value
            })
    }
        console.log(handleChange)
    
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        username:
                        <input 
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}/>
                    </label>

                    <label>
                        password:
                        <input
                            id="password"
                            name="password" 
                            value={form.password}
                            onChange={handleChange}/>
                    </label>

                    <button
                        id="submit"
                        type="submit">
                        Submit
                    </button>
                </form>
               
               <p id="error" className="error">{error}</p>
        </ModalContainer>
    </ComponentContainer>
    );
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password". - ok

//2. Add in a p tag with the id="error" under the login form for use in error display. - ok 

//3. Add in necessary local state to support login form and error display. -ok I think ????

//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page. - ??? problem

//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**

//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
