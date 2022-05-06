import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, getProductById } from '../actions/productActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
export default function Editproduct({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [prices, setPrice] = useState();
  const [saleprice, setSalePrice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const getproductbyidstate = useSelector(state => state.getProductByIdReducer);
  const { product, error, loading } = getproductbyidstate;

  const editproductstate = useSelector(state => state.editProductReducer);
  const { editloading, editsuccess } = editproductstate;

  useEffect(() => {
    if (product) {
      if (product._id == match.params.productid) {
        setname(product.name);
        setdescription(product.description);
        setPrice(product.prices);
        setSalePrice(product.saleprice);
        setcategory(product.category);
        setimage(product.image);
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [product, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedproduct = {
      _id: match.params.productid,
      name,
      description,
      prices,
      saleprice,
      category,
      image
    };

    dispatch(editProduct(editedproduct));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Product</h1>
        <h1>Id = {match.params.productid}</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Product details edited successfully" />}
        {editloading && <Loading />}
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
            value={prices}
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
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}
