import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
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

  return (
    <Wrapper>
        <Grid>
          {
            data.map((item, index) => (
              <GridItem key={index}>
                <GalleryItem src={item.url}/>
              </GridItem>
            ))
          }
        </Grid>
    </Wrapper>
  )
}

export default Gallery;