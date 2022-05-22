import Header from "./Header";
import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';


function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        ProductListApi();
    }, [])

    async function ProductListApi() {
// debugger;
        let result = await fetch("http://127.0.0.1:8000/api/productList");
        let resp = await result.json();
        setData(resp);
    }
    console.log(data);
    return (
        <div>
            <Header/>
            <div className="col-md-6 offset-3">
                <h1>Product List</h1>

                <Table className="">
                    <thead>
                    <tr>
                        <td>ID#</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item, key) =>{
                            return(
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img src={"http://127.0.0.1:8000/"+item.file_path} alt="" width="100"/></td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon="check-square" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList;