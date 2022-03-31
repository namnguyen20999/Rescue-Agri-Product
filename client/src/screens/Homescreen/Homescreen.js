import React from 'react';
import products from '../../data/productData';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../Components/Card/ProductCard/ProductCard';
import SearchBar from '../../Components/Navbar/SearchBar';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Homescreen() {
  const [filter, setFilter] = React.useState(' ');
  const [searchResult, setSearchResult] = React.useState(products);

  const handleFiltersChange = filter => {
    setFilter(filter);

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

  return (
    <div>
      <SearchBar onSubmit={handleFiltersChange}></SearchBar>
      <Container fluid>
        <Styled animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} Layout>
          <Row>
            {searchResult &&
              searchResult.map((product, index) => {
                return (
                  <Col lg={3} md={4} sm={6} key={index}>
                    <ProductCard product={product} />
                  </Col>
                );
              })}
          </Row>
        </Styled>
      </Container>
    </div>
  );
}
