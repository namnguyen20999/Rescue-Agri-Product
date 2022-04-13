export const addToCartActions = product => (dispatch, getState) => {
  var cartItem = {
    name: product.name,
    image: product.image,
    prices: product.prices
  };
  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
