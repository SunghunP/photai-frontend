import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.bg});
  font-family: 'Fredoka One', cursive;
  a {
    text-decoration: none;
    color: white;
    margin: 50px;
    font-size: 23px;
  }
`

export default function Header({ woodbg }) {
  return (
    <StyledNav bg={woodbg}>
      <Link to="/">Pho Tai Puyallup</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About Us</Link>
    </StyledNav>
  )
}