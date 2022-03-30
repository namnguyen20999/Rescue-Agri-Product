import React from 'react';
import products from '../../data/productData';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../Components/Card/ProductCard/ProductCard';
import SearchBar from '../../Components/Navbar/SearchBar';

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
  return (
    <div>
      <SearchBar onSubmit={handleFiltersChange}></SearchBar>
      <Container fluid>
        <Row>
          {searchResult &&
            searchResult.map((product, index) => {
              return (
                <Col lg={3} md={4} sm={6} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
