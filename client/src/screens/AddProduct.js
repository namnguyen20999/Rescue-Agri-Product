import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
export default function Addpizza() {
  const [name, setname] = useState('');
  const [price, setPrice] = useState();
  const [saleprice, setSalePrice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();

  const addproductstate = useSelector(state => state.addProductReducer);
  const { success, error, loading } = addproductstate;
  function formHandler(e) {
    e.preventDefault();

    const product = {
      name,
      description,
      price,
      saleprice,
      category,
      image
    };

    console.log(product);
    dispatch(addProduct(product));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Add Products</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={e => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="price"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="sale price"
            value={saleprice}
            onChange={e => {
              setSalePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={e => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={e => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={e => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
