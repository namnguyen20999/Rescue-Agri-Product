import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Components/Card/ProductCard/ProductCard';
import ProductCard2 from '../Components/Card/ProductCard/ProductCard2';
import HeroSection from '../Components/HeroSection.js';
import SearchBar from '../Components/Navbar/SearchBar';
import Category from '../Components/Category';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getAllProduct } from '../actions/productActions';
import { ToastContainer } from 'react-toastify';
import NavbarMenu from '../Components/Navbar/NavbarMenu';

export default function Homescreen() {
  const [showing,setShowing] = React.useState(true);

  const dispatch = useDispatch();

  const productState = useSelector(state => state.getAllProductReducer);

  const { products, error, loading } = productState;

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const [filter, setFilter] = React.useState(' ');
  const [searchResult, setSearchResult] = React.useState(productState.products);

  const handleFiltersChange = data => {
    console.log(data);
    setFilter(data);
    setShowing(false);
    // Return all object value from data and then filter by search term
    const newSearchResult = products.filter(product => {
      return Object.values(product).join(' ').toString().toLowerCase().includes(filter.searchTerm.toLowerCase());
    });
    setSearchResult(newSearchResult);
  };

  const Styled = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  `;

  const CateContainer=styled.div`
  padding: 0px 64px;
`
const CateTitle=styled.div`
    width: 100%;
    font-size: 1.6rem;
    align-items: center;
    font-weight: 500;
    padding: 48px 0px 0px 0px;
`

  return (
    <div>
    {/*<SearchBar onSubmit={handleFiltersChange}/>*/}
    <NavbarMenu handleFiltersChange={handleFiltersChange}/> 
    <HeroSection displaySection={showing} />
    <Category displaySection={showing}/>
    <CateContainer>
      <CateTitle> Featured Products </CateTitle>
    </CateContainer>
    <Container style ={{ padding: "0px 64px" }} fluid>
    <Styled animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
      <Row>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          searchResult &&
          searchResult.map((product, index) => {
            return (
              <Col lg={3} md={4} sm={6} key={index}>
                <ProductCard2 product={product} />
              </Col>
            );
          })
        )}
      </Row>
    </Styled>
  </Container>

        {/*<Container fluid>
        <Styled animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
          <Row>
            {loading ? (
              <h1>Loading...</h1>
            ) : error ? (
              <h1>Something went wrong</h1>
            ) : (
              searchResult &&
              searchResult.map((product, index) => {
                return (
                  <Col lg={3} md={4} sm={6} key={index}>
                    <ProductCard product={product} />
                  </Col>
                );
              })
            )}
          </Row>
        </Styled>
      </Container>
            */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
