import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from "./Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";

function App() {
    return (
        <div className="App">
            <Router>
                {/*<Header/>*/}
                {/*<Button>Test Button</Button>*/}
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={
                        <Protected Cmp={ProductList}>
                            {/*<ProductList/>*/}
                        </Protected>
                    }/>
                    <Route path="/add" element={
                        <Protected Cmp={AddProduct}>
                            {/*<AddProduct/>*/}
                        </Protected>
                    }/>
                    <Route path="/update" element={
                        <Protected Cmp={UpdateProduct}>
                            {/*<UpdateProduct/>*/}
                        </Protected>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
