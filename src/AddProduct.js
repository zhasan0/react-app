import Header from "./Header";
import {React, useState} from "react";

function AddProduct() {
    const [name,setName] = useState("");
    const [des,setDes] = useState("");
    const [price,setPrice] = useState("");
    const [file,setFile] = useState("");

    async function add(){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('des', des);
        formData.append('file', file);

        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: "POST",
            body: formData
        })
        alert("Data is saved")
    }

    return(
        <div>
            <Header />
            <h3 className="text-center mt-5">Add Product Page</h3>
            <div className="col-md-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price"
                           onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="des">Description</label>
                    <textarea name="" id="des" cols="30" rows="3" className="form-control" onChange={(e) => setDes(e.target.value) }></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">File</label>
                    <input type="file" className="form-control" id="price"
                           onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={add}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct