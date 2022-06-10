import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Header(props) {

  const StyledNav = styled.nav`
    width: 100%;
  
    a {
      color: ${props.color};
    }
    
    

  `

  return (
    <StyledNav>
      <Link to="/">HOME</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </StyledNav>
  )
}