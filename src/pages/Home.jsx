import styled from "styled-components";
import React from 'react';

export default function Home({ menu, setMenu }) {


  
  // write get menu items function to get items from backend

  return (
    <div>
      <StyledContainer>
        <GridWrapper>
          <div><img src="" alt=""></img></div>
          <div>
            <h1>Pho Tai Puyallup</h1>
            <p>Hello this is a p tag and this is used to describe some of the great food that pho tai has</p>
          </div>
        </GridWrapper>
      </StyledContainer>
  
      <button></button>
    </div>
  )
}

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  border: 3px solid white;
  padding: 80px;
  text-align: center;
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`