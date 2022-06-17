import styled from "styled-components";
import React from 'react';
import woodbg from '../images/woodbg.png';
import Carousel from '../components/Carousel';

const StyledMainContainer = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  max-width: inherit;
`

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 80px;
  text-align: center;
/* size image to fit on the left side of the grid */
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

export default function Home({ menu, setMenu, mainBgBamboo, placeholder }) {
  return (
    <StyledMainContainer bg={mainBgBamboo}>
      <StyledContainer>
        <GridWrapper>
          <div className="img-cntr">
            <img className="home-soup-image" src={woodbg} alt="piece of wood"></img>
          </div>
          <div className="main-page-desc">
            <h1>Pho Tai Puyallup</h1>
            <p>Hello this is a p tag and this is used to describe some of the great food that pho tai has blah blah blah babel babel this is a test to see how a lot of text makes my box container look</p>
          </div>
        </GridWrapper>
      </StyledContainer>
      <Carousel placeholder={placeholder}/>
      <div>This is the google maps</div>
    </StyledMainContainer>
  )
}

