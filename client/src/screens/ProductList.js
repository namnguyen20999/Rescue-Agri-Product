import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProduct } from '../actions/productActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { Table, Container } from 'react-bootstrap';
import { VscTrash } from 'react-icons/vsc';
import { TiEdit } from 'react-icons/ti';

export default function Productlist() {
  const dispatch = useDispatch();

  const productState = useSelector(state => state.getAllProductReducer);

  const { products, error, loading } = productState;
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <Container>
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Products list</h3>
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
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    />
                    <Link to={`/admin/editproduct/${product._id}`}>
                      <TiEdit />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
