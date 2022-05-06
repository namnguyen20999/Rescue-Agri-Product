import axios from 'axios';
export const getAllProduct = () => async dispatch => {
  dispatch({ type: 'GET_PRODUCT_REQUEST' });
  try {
    const response = await axios.get('/api/products/getproducts');
    console.log(response);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: response.data });
  } catch (e) {
    dispatch({ type: 'GET_PRODUCT_FAILED', payload: e });
  }
};

export const filterProducts = searchkey => async dispatch => {
  dispatch({ type: 'GET_PRODUCT_REQUEST' });
  try {
    var filteredProducts;
    const response = await axios.get('/api/products/getproducts');
    filteredProducts = response.data.filter(product => product.name.toLowerCase().includes(searchkey.toLowerCase()));

    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: filteredProducts });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCT_FAILED', payload: error });
  }
};

export const addProduct = product => async dispatch => {
  dispatch({ type: 'ADD_PRODUCT_REQUEST' });
  try {
    const response = await axios.post('/api/products/addproducts', { product });
    console.log(response);
    dispatch({ type: 'ADD_PRODUCT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'ADD_PRODUCT_FAILED', payload: error });
  }
};
