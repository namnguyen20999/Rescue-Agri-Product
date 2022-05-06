export const getAllProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'GET_PRODUCT_SUCCESS':
      return {
        loading: false,
        products: action.payload
      };
    case 'GET_PRODUCT_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PIZZABYID_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'GET_PIZZABYID_SUCCESS':
      return {
        loading: false,
        pizza: action.payload
      };
    case 'GET_PIZZABYID_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'ADD_PRODUCT_SUCCESS':
      return {
        loading: false,
        success: true
      };
    case 'ADD_PRODUCT_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const editPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_PIZZA_REQUEST':
      return {
        editloading: true,
        ...state
      };
    case 'EDIT_PIZZA_SUCCESS':
      return {
        editloading: false,
        editsuccess: true
      };
    case 'EDIT_PIZZA_FAILED':
      return {
        editerror: action.payload,
        editloading: false
      };
    default:
      return state;
  }
};
