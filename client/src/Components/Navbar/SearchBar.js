import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Nav } from 'react-bootstrap';
import styled from 'styled-components/macro';
import { filterProducts } from '../../actions/productActions';

const SearchBarWrapper = styled(Nav)`
  justify-content: center;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState('');
  const handleSearchFunction = e => {
    e.preventDefault();
    dispatch(filterProducts(searchkey));
  };
  return (
    <SearchBarWrapper>
      <Form className="d-flex" style={{ width: '31.25rem' }}>
        <input
          onChange={e => {
            setsearchkey(e.target.value);
          }}
          value={searchkey}
          type="text"
          className="form-control w-100"
          placeholder="search products"
        />
        <button onClick={handleSearchFunction}>Filter</button>
      </Form>
    </SearchBarWrapper>
  );
}
