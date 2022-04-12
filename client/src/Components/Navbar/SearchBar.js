import React from 'react';
import { FormControl, Form, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  onSubmit: null
};

const SearchBarWrapper = styled(Nav)`
  justify-content: center;
  margin-top: 1rem;
`;

export default function SearchBar(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = React.useState('');
  const typingTimeoutRef = React.useRef(null);

  const handleSearchTermChange = e => {
    // Assign e.target.value to value in order to prevent "e -release" bugs
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    // CLEAR OLD TIMEOUT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // SET TIMEOUT
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      };
      onSubmit(formValues);
    }, 300);
  };

  return (
    <SearchBarWrapper>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </Form>
    </SearchBarWrapper>
  );
}
