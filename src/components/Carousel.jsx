import { useState } from 'react';
import styled from 'styled-components';
import foodImgArray from '../data/foodImgArray';

const StyledCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(12, 12, 12, 0.3);
  padding: 30px;
`;

const StyledImg = styled.img`
  max-height: 150px;
  max-width: 150px;
  transition: all .3s 0s ease-in-out;
  border-radius: 10%;
  margin: 10px;
  padding: 5px; 
  
  :hover { 
    transform: scale(1.6);
  } 
`;

export default function Carousel({ placeholder }) {
  const [active, setActive] = useState(true);
  const [id, setId] = useState(0);

  function handleClick(e) {
    if (e.target.className === '>') {
      if (id >= 5) {
        setId(0);
      } else {
        setId(id + 1);
      }
    } else if (e.target.className === '<') {
      if (id <= 0) {
        setId(5);
      } else {
        setId(id - 1);
      }
    }
  };

  return (
    <StyledCarousel onClick={handleClick}>
      <div>
        {foodImgArray.map(item =>
          <StyledImg src={item} alt="hello" />
        )}
      </div>
    </StyledCarousel>
  );
};