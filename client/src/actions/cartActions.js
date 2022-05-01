/* eslint-disable no-lone-blocks */
export const cartActions = (product, counter) => (dispatch, getState) => {
  const cartItem = {
    description: product.description,
    id: product.id,
    image: product.image,
    name: product.name,
    prices: product.prices
  };

  switch (counter) {
    case 'increase':
      {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
      }
      break;
    case 'decrease':
      {
        dispatch({ type: 'DECREASE_FROM_CART', payload: cartItem });
      }
      break;
    case 'removeItem':
      {
        dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: cartItem });
      }
      break;
    case 'getTotal':
      {
        dispatch({ type: 'GET_TOTAL', payload: cartItem });
      }
      break;
    default:
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
