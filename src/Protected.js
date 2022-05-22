import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import React, {useEffect} from "react";

function Protected(props) {
    let Cmp = props.Cmp

    const  navigate  = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')){
            navigate("/login");
        }
    })
    return(
        <div>
            <Cmp />
        </div>
    )
}

export default Protected