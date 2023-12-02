// NavBar.js
import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const NavContainer = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const SearchBar = styled.input`
  flex-grow: 1;
  margin: 0 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 1rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #333;
  }
`;

const NavBar = () => (
  <NavContainer>
    <Logo>YourLogo</Logo>
    <SearchBar type="text" placeholder="Search..." />
    <Icons>
      <FaSearch />
      <FaBell />
      <FaUserCircle />
    </Icons>
  </NavContainer>
);

export default NavBar;
