import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';
function Login() {
    const [email,setEmail]=useState('');        //keep track whatever u type in email
    const [password,setPassword]=useState('');
    const history=useHistory();     // allows us programmatically change the url

    const signIn=e=>{
        e.preventDefault();

        //some fancy firebase login

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register=e=>{

        e.preventDefault();  //for avoid loss of data after refreshing 

        //some fancy firebase register

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if (auth) {
                history.push('/');
            }
            console.log(auth);
        }).catch(error=>
            alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
            </Link>
            <div className="login__container">
                <h1 className="login__sign">Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange=
                    {e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in you agree to the AMAZON FAKE CLONE terms and conditions
                </p>
                <button onClick={register}className="login__registerButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
