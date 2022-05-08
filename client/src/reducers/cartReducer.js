import { toast } from 'react-toastify';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      console.log(state);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      toast.success(`${action.payload.name} is added to Cart`, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
      return {
        cartItems: [...state.cartItems]
      };
    }
    case 'DECREASE_FROM_CART': {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      toast.error(`Decreased ${action.payload.name} cart quantity`, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
      return {
        cartItems: [...state.cartItems]
      };
    }
    case 'REMOVE_ITEM_FROM_CART': {
      const nextCartItems = state.cartItems.filter(cartItem => cartItem.name !== action.payload.name);
      state.cartItems = nextCartItems;
      toast.info(`Removed ${action.payload.name} from cart`, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
      return {
        cartItems: [...state.cartItems]
      };
    }

    default:
      return state;
  }
};
