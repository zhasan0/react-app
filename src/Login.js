import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    })

    async function login() {
        console.log(email, password);
        let item = {email, password};
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            }
        })

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")
    }

    return (
        <div>
            <Header/>
            <div className="col-md-6 offset-3">
                <h3 className="mb-5">Login Here</h3>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={login}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login