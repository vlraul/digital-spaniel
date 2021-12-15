import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: block;
  
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-auto-rows: minmax(420px, 1fr);
  grid-auto-flow: dense;
  gap: 30px;
`;

function CardList ({ data }) {

  if(!data){
    return null;
  }

  return (
    <Wrapper>
      <GridContainer>
        {data.map((item, index)=> {
          return <Card data={item} key={index}/>
        })}
      </GridContainer>
    </Wrapper>
  )
}

export default CardList;