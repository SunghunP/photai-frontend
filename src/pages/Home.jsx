import styled from "styled-components";
import React from 'react';
import phoboy from '../images/phoboy.png';
import Carousel from '../components/Carousel';

const StyledMainContainer = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  max-width: inherit;
  font-family: 'Fredoka One', cursive;
  height: 100%;
`;

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
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  h1{
    font-family: 'Damion', cursive;
  }
`;

const StyledMapView = styled.div`
  background-image: url(${props => props.bg});
  height: 100px;
`

export default function Home({ menu, setMenu, mainBgBamboo, placeholder, bambooBg }) {
  return (
    <>
      <StyledMainContainer bg={mainBgBamboo}>
        <StyledContainer>
          <GridWrapper>
            <div className="img-cntr">
              <img className="home-soup-image" src={phoboy} alt="piece of wood"></img>
            </div>
            <div className="main-page-desc">
              <h1>Pho Tai Puyallup</h1>
              <p>Located off South Meridian, our family owned restaurant has been serving the Puyallup community for over 15+ years.</p>
              <p>Come in and try our piping hot Pho, tasty teriyaki and our delicious bubble tea!</p>
            </div>
          </GridWrapper>
        </StyledContainer>
        <Carousel placeholder={placeholder} />
      </StyledMainContainer>

      <StyledMapView bg={bambooBg} >Footer</StyledMapView>
    </>
  )
}

