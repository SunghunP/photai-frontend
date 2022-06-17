import styled from "styled-components";
import React from 'react';
import woodbg from '../images/woodbg.png'

export default function Home({ menu, setMenu }) {


  
  // write get menu items function to get items from backend

  return (
    <div>
      <StyledContainer>
        <GridWrapper>
          <div>
            <img className="home-soup-image" src={woodbg} alt="piece of wood"></img>
          </div>
          <div>
            <h1>Pho Tai Puyallup</h1>
            <p>Hello this is a p tag and this is used to describe some of the great food that pho tai has blah blah blah babel babel this is a test to see how a lot of text makes my box container look</p>
          </div>
        </GridWrapper>
      </StyledContainer>
      <div>This is where the carasoul goes</div>
      <div>This is the google maps 
      </div>
  
      <button></button>
    </div>
  )
}

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 80px;
  text-align: center;

// size image to fit on the left side of the grid
.home-soup-image{
  float: left;
  height: 100%;
  width: 90%;
  border-radius: 85%;
}
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`