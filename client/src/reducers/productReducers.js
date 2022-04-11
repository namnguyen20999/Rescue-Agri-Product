const products = [
  {
    id: 1,
    name: 'Chilli',
    description: 'Description for Chilli',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Vegetables',
    image: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/chillies-red.jpg'
  },
  {
    id: 2,
    name: 'Cucumber',
    description: 'Description for Cucumber',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits',
    image: 'https://www.suryasupermart.com/wp-content/uploads/2021/05/khira-Cucumber.jpg'
  },
  {
    id: 3,
    name: 'Dragon Fruit',
    description: 'Description for Dragon fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 4,
    name: 'Pineapple',
    description: 'Description for Dragon fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 5,
    name: 'Grape Fruit',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 6,
    name: 'Guava',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 7,
    name: 'Potato',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 8,
    name: 'Scallion',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 9,
    name: 'Tomato',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 10,
    name: 'Watermelon',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 11,
    name: 'Kiwi',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  },
  {
    id: 12,
    name: 'Banana',
    description: 'Description for Grape fruit',
    prices: '10.000',
    saleprice: '5.000',
    category: 'Fruits'
  }
];

export const getAllProductReducer = (state = { products }, action) => {
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
