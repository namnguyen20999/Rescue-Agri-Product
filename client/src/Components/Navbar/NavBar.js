import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import styled from 'styled-components';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function NavBar() {
  return (
    <NavBarContainer role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Homepage
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Shipping & Payment
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Cart
        </Typography>
      </Breadcrumbs>
    </NavBarContainer>
  );
}
