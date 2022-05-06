import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProduct } from '../actions/productActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { Table } from 'react-bootstrap';
import { VscTrash } from 'react-icons/vsc';
import { TiEdit } from 'react-icons/ti';

export default function Pizzaslist() {
  const dispatch = useDispatch();

  const productState = useSelector(state => state.getAllProductReducer);

  const { products, error, loading } = productState;
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <div>
      <h2>Product List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    Price : {product.prices} <br />
                    Sale Price: {product.saleprice}
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <VscTrash
                      style={{ color: 'red' }}
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    />
                    <Link to={`/admin/editpizza/${product._id}`}>
                      <TiEdit />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
