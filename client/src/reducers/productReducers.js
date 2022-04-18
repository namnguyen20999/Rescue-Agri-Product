const products = [
  {
    id: 1,
    name: 'Chilli',
    description: 'Description for Chilli',
    prices: 10,
    saleprice: 5,
    category: 'Vegetables',
    image: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/chillies-red.jpg'
  },
  {
    id: 2,
    name: 'Cucumber',
    description: 'Description for Cucumber',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://www.suryasupermart.com/wp-content/uploads/2021/05/khira-Cucumber.jpg'
  },
  {
    id: 3,
    name: 'Dragon Fruit',
    description: 'Description for Dragon fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image:
      'https://www.everfreshagri.online/image/everfreshagri/image/data/all_product_images/product-295/redDragonFruit.jpg'
  },
  {
    id: 4,
    name: 'Pineapple',
    description: 'Description for Dragon fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://justbuyafrica.com/shop/public/uploads/products/meta/QcE2QIqce82EUgNbqSYyeX3rkyGW4h5patlVwO2M.jpeg'
  },
  {
    id: 5,
    name: 'Grape Fruit',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://www.togotshipchandler.com/image/cache/catalog/the%202020/fruits/Grapefruit-758x633.jpg'
  },
  {
    id: 6,
    name: 'Guava',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://traicayvietflorida.com/wp-content/uploads/2021/09/guava-traicayflorida-min-scaled.jpeg'
  },
  {
    id: 7,
    name: 'Potato',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://hanoifreshfoods.com/wp-content/uploads/2020/11/potato.jpg'
  },
  {
    id: 8,
    name: 'Scallion',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://pixfeeds.com/images/herbs-spices/1280-584247502-green-onion.jpg'
  },
  {
    id: 9,
    name: 'Tomato',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://lea2011shpk.com/wp-content/uploads/2021/01/istockphoto-941825878-612x612-1.jpg'
  },
  {
    id: 10,
    name: 'Watermelon',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h72/h70/14530883289118/32553_main.jpg_1700Wx1700H'
  },
  {
    id: 11,
    name: 'Kiwi',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'http://familyfruits.com.vn/wp-content/uploads/2021/01/kiwi-xanh-zespri-new-zealand.jpg'
  },
  {
    id: 12,
    name: 'Banana',
    description: 'Description for Grape fruit',
    prices: 10,
    saleprice: 5,
    category: 'Fruits',
    image: 'https://www.aprifel.com/wp-content/uploads/2019/02/banane.jpg'
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
