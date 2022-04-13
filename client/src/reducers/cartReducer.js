export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, action.payload]
      // };
      return {
        cartItems: [...state.cartItems]
      };
    default:
      return state;
  }
};
