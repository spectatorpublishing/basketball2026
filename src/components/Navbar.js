import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const NavBarWrapper = styled.div`
  width: 100%;
  color: #FFF;
  text-align: center;
  font-family: "Paytone One";
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.3px;
  margin-top: 89px;
  margin-bottom: 45.62px;
  display: flex;
  flex-wrap: wrap;
  gap: 100.93px;
  justify-content: center; 
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: 22px;
    gap: 50px;
  }


  @media (max-width: 500px) {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 18px;
    gap: 25px;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 383px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9C92C7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #FFF;
  font-family: "Paytone One"; 
  font-size: 26px;
  transition: background 0.2s ease;

  &:hover {
    background: #5B62B3; 
  }

  &.active {
    background: #5B62B3;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
  }


  @media (max-width: 500px) {
    width: 220px;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

const NavButton = ({ path_name, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {

    if (location.pathname === path_name) {
      event.preventDefault();
      navigate('/all', { state: { preserveScroll: true } });
    }
  };

  return (
    <StyledNavLink to={path_name} onClick={handleClick} state={{ preserveScroll: true }}>
      {children}
    </StyledNavLink>
  );
};

const Navbar = () => {
  return (
    <NavBarWrapper>
      <NavButton path_name="/general">GENERAL</NavButton>
      <NavButton path_name="/women-basketball">WOMEN’S BASKETBALL</NavButton>
      <NavButton path_name="/men-basketball">MEN’S BASKETBALL</NavButton>
    </NavBarWrapper>
  );
};

export default Navbar;
