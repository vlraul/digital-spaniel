import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: clamp(50px, calc(50px + 100 * ((100vw - 1280px) / 640)), 150px)
           clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px)
  ;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px;
  }
  
`;
const Container = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-auto-flow: row;
  position: relative;
  grid-gap: 12px;
  padding: 0;
  margin: 0;
  writing-mode: vertical-lr;

`;

const GridItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  list-style-type: none;
  
  :nth-of-type(3n) {
    grid-column-end: span 2
  }
  :nth-of-type(3n+1) {
    grid-row-end: span 1
  }
  :nth-of-type(2n+2) {
    grid-column-end: span 2
  }
  :nth-of-type(2n+2) {
    grid-column-end: span 2
  }
`;

const GalleryItem = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Gallery({ data }) {

  if(!data) {
    return null;
  }

  return (
    <Wrapper>
      <Container>
        <Grid>
          {
            data.map((item, index) => (
              <GridItem key={index}>
                <GalleryItem src={item.url}/>
              </GridItem>
            ))
          }
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Gallery;