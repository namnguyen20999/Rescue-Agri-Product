import React from 'react';
import { FormControl, Form, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { BiSearchAlt } from "react-icons/bi";


SearchBar2.propTypes = {
  onSubmit: PropTypes.func
};

SearchBar2.defaultProps = {
  onSubmit: null
};

const SearchBar2Wrapper = styled(Nav)`
  justify-content: center;
  
`;
const SearchIcon = styled.div`
  background-color: #3BB77E;
  width: 50px;
  border-radius: 0px 3px 3px 0px;
  margin-left: -10px;
  color: white;
  padding: 5px;
`

export default function SearchBar2(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = React.useState('');
  const typingTimeoutRef = React.useRef(null);
  
  const handleSearchTermChange = e => {
    // Assign e.target.value to value in order to prevent "e -release" bugs
    const value = e.target.value;
    console.log(props);
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
    <SearchBar2Wrapper>
      <Form className="d-flex" style={{width: "500px"}}>
        <FormControl
          type="search"
          placeholder="Search for items..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{backgroundColor: "#F3F3F3", border: "none", color: "#ADADAD", fontWeight: "normal", boxShadow: "none"}}
        />
        <SearchIcon>
          <BiSearchAlt/>
        </SearchIcon>
      </Form>
    </SearchBar2Wrapper>
  );
}
