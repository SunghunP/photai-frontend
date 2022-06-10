import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.bg});
  a {
    text-decoration: none;
    color: white;
  }
`

export default function Header({woodbg}) {


  return (
    <StyledNav bg={woodbg}>
      <Link to="/">Pho Tai Puyallup</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/about">Contact Us</Link>
      <Link to="/contact">About Us</Link>
    </StyledNav>
  )
}