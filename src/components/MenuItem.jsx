import styled from "styled-components";

const StyledP = styled.p`
  font-size: 30px;
  background: rgba(40,40,40, 0.8);
  color: white; 
  padding: 10px; 
  border-radius: 100px;
  :hover {
    background: rgba(12,12,12, 1);
    color:#B4DBB8;
  }
`

export default function MenuItem({ idx, itemNumber, menuItemTag, name, englishName, desc, price, foodtype }) {
  return <div className="menuItems">
    <StyledP key={idx} id={itemNumber} foodtype={foodtype}>
      {menuItemTag} {englishName} {name} {price}
    </StyledP>
  </div>
}