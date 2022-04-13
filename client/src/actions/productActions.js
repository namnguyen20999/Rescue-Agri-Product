import axios from 'axios';
export const getAllProduct = () => async dispatch => {
  dispatch({ type: 'GET_PRODUCT_REQUEST' });
  try {
    const response = await axios.get('/api/products/getproducts');
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: response.data });
  } catch (e) {
    dispatch({ type: 'GET_PRODUCT_FAILED', payload: e });
  }
};
