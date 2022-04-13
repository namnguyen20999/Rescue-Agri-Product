import { toast } from 'react-toastify';

export const addToCartActions = product => (dispatch, getState) => {
  var cartItem = {
    name: product.name,
    image: product.image,
    prices: product.prices,
    id: product.id,
    description: product.description
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  toast.success(`${cartItem.name} is added to Cart`, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
