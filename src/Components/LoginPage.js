import React from 'react';
import { useState } from "react";
import axios from 'axios';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const notify = () => toast("YOU ARE LOGED IN");

    const [isLogin, setisLogin] = useState(false);


    const login = () => {
        const UserName = document.getElementById("username").value;
        const PassWord = document.getElementById("password").value;

        axios.post('https://fakestoreapi.com/auth/login', {
            username: UserName,
            password: PassWord
        }).then((response) => {
            console.log("login", response);
            notify();
            setisLogin(true)
        }).catch(error => {
            alert("wrong info");
            // console.log(error)
        });
    }

    return (
        <>
        <ToastContainer/>
            {
                isLogin == true ? <HomePage /> : <>
                <div className="container" style={{ justifyContent: "center", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", width: "70%", height: "55%", border: "solid 2px", padding: "2vh" }}>
                    <form className='mt-5'>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className='d-grid gap-2'>
                            <button className="btn btn-primary" type="button" onClick={login}>Login</button>
                        </div>
                        <p style={{textAlign:"center",marginTop:"2vh"}}>

                        <Link  to="/CreateAccount">Create an Account</Link>
                        </p>
                    </form>
                </div></>
            }

        </>
    );
}

export default LoginPage;
