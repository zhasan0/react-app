import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";

function Register() {
    const  navigate  = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (localStorage.getItem('user-info')){
            navigate("/add");
        }
    })


    // data save
    async function signUp(){
        let item = {name, phone, email, password};
        console.log(item);

        let result = await fetch("http://127.0.0.1:8000/api/register", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
              "Content-type": "application/json",
              "Accept": "application/json",
          }
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/add");
        console.log("Result", result)
    }

    return (
        <div>
            <Header/>
            <div className="col-md-6 offset-3">
                <h3 className="mb-5">Register Here</h3>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)}/>
                </div>
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
                    <button className="btn btn-success" onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Register