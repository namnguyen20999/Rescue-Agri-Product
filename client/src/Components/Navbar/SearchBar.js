import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Nav } from 'react-bootstrap';
import styled from 'styled-components/macro';
import { filterProducts } from '../../actions/productActions';
import { FaSearch } from 'react-icons/fa';

const SearchBarWrapper = styled(Nav)`
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: white;
  margin-left: 4px;
  border: none;
`;

const StyledInput = styled.input`
  border-radius: 4px;
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
        <StyledInput
          onChange={e => {
            setsearchkey(e.target.value);
          }}
          value={searchkey}
          type="text"
          className="form-control w-100"
          placeholder="search products"
        />
        <StyledButton onClick={handleSearchFunction}>
          <FaSearch />
        </StyledButton>
      </Form>
    </SearchBarWrapper>
  );
}
