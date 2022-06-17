import { useState } from 'react';
import styled from 'styled-components';
import foodImgArray from '../data/foodImgArray';

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(12, 12, 12, 0.05);
  div {
    img {
      max-height: 600px;
      width: 600px; 
    }
  }
  button {
    font-size: 75px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    :hover {
      color: brown;
    }
  }
`;

export default function Carousel({ placeholder }) {
  const [active, setActive] = useState(true);
  const [id, setId] = useState(1);

  function handleClick(e) {
    if (e.target.className === '>') {
      if (id >= 5) {
        setId(1);
      } else {
        setId(id + 1);
      }
    } else if (e.target.className === '<') {
      if (id <= 1) {
        setId(5);
      } else {
        setId(id - 1);
      }
    }
  };

  return (
    <StyledCarousel onClick={handleClick}>
      {foodImgArray.map(item =>
        <img hidden={active} src={item} alt="hello" />
      )}
      <button className='<'>{'<'}</button>
      <div placeholder={placeholder}><img src={foodImgArray[id]} /></div>
      <button className='>'>{'>'}</button>
    </StyledCarousel>
  );
};