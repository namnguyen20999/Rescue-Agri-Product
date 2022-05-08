import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';
import { Container } from 'react-bootstrap';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
export default function AddProduct() {
  const [name, setname] = useState('');
  const [prices, setPrice] = useState();
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
      prices,
      saleprice,
      category,
      image
    };

    console.log(product);
    dispatch(addProduct(product));
  }

  const btnstyle = {
    backgroundColor: '#3bb77e',
    color: 'white'
  };

  return (
    <Container>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Add Products</h3>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Product added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control my-3"
            type="text"
            placeholder="name"
            value={name}
            onChange={e => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="price"
            value={prices}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="sale price"
            value={saleprice}
            onChange={e => {
              setSalePrice(e.target.value);
            }}
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="category"
            value={category}
            onChange={e => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="description"
            value={description}
            onChange={e => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="image url"
            value={image}
            onChange={e => {
              setimage(e.target.value);
            }}
          />
          <div className="d-flex justify-content-end"></div>
          <button style={btnstyle} className="btn my-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </Container>
  );
}
