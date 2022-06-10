import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
      <p>What's popping</p>
      <Link to="/">HOME</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  )
}