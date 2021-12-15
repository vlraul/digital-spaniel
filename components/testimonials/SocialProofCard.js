import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 440px;
  height: 660px;
  border-radius: 10px;
  background-color: #E2E4E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 62px 64px 62px;
  transition: all 0.3s;
  ${({activeIndex, index}) => activeIndex === index && css`
    background-color: #19293A;
    color: white;
    transform: scale(1.05);
  `}
  
`;

const Quote = styled.p`
  font-size: 26px;
  text-align: center;
  font-style: italic;
  margin-bottom: 32px;
`;

const Picture = styled.img`
  border: 3px solid white;
  border-radius: 50px;
  width: 96px;
  height: 96px;
  margin-bottom: 16px;
`;

const Name = styled.p`
  font-size: 21px;
  font-weight: 700;
`;

const Position = styled.p`
  font-size: 21px;
`;

function SocialProofCard({ data, index, activeIndex}) {
  if(!data) {
    return null;
  }

  return (
    <Wrapper activeIndex={activeIndex} index={index}>
      <Quote>
        {data.quote}
      </Quote>
      <Picture src={data.image} />
      <Name>
        {data.name}
      </Name>
      <Position>
        {data.position}
      </Position>
    </Wrapper>
  )

}

export default SocialProofCard;