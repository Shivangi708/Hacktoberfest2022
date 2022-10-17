import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase";

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(err => {
                console.error(err);
            })
        }

    const register = (e) => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push("/");
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" 
                    className="login__logo" 
                />
            </Link>
            <div className="login__container">
                <h1> Sign-in</h1>

                <form>
                    <h5> Email </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5> Password </h5>
                    <input type="password" value={password}  onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login__signinButton"> Sign in </button>

                </form>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    n an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                </p>
                <button onClick={register} className="login__registerButton"> Create your amazon account </button>
            </div>
        </div>
    )
}

export default Login;
