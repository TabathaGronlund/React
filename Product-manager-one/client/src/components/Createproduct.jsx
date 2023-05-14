import React, {useState} from 'react'
import axios from "axios";


const CreateProduct =(props) => {

    const [title, setTitle] = useState("")

    const [price, setPrice] = useState("")

    const[description, setDescription] = useState("")

    const submitHandler= (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then ((res) => {
            setTitle("");
            setPrice("");
            setDescription("");
            // console.log(res);
            // console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}





  return (
    <div>
        <h1>Product Manager</h1>
        <form className="product-form" onSubmit = {submitHandler}>
            <div className="product-title">
                <label>Title</label>
                <input value={title} type="text" name="title" onChange={(e) => setTitle (e.target.value)}/>
            </div>
            <div className="product-price">
                <label>Price</label>
                <input value={price} type="number" name="price" onChange={(e) => setPrice (e.target.value)}/>
            </div>
            <div className="product-description">
                <label>Description</label>
                <input value={description} type="text" name="description" onChange={(e) => setDescription (e.target.value)}/>
            </div>
            <input className="sumbit-product" type="submit" value="Create"/>
        </form>
    </div>
  )
}

export default CreateProduct;

