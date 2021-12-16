import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: clamp(350px, calc(350px + 100 * ((100vw - 1280px) / 640)), 450px);
  height: clamp(500px, calc(500px + 160 * ((100vw - 1280px) / 640)), 660px);
  border-radius: 10px;
  background-color: #E2E4E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: clamp(40px, calc(40px + 22 * ((100vw - 1280px) / 640)), 62px);
  transition: all 0.3s;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  ${({activeIndex, index}) => activeIndex === index && css`
    background-color: #19293A;
    color: white;
    transform: scale(1.1);
    
    @media (max-width: 768px) {
      display: flex;
    }
    
  `}
`;

const Quote = styled.p`
  font-size: clamp(20px, calc(20px + 6 * ((100vw - 1280px) / 640)), 26px);
  text-align: center;
  font-style: italic;
  margin-bottom: 32px;
`;

const Picture = styled.img`
  border: 3px solid white;
  border-radius: 50px;
  width: clamp(64px, calc(64px + 32 * ((100vw - 1280px) / 640)), 96px);
  height: clamp(64px, calc(64px + 32 * ((100vw - 1280px) / 640)), 96px);
  margin-bottom: 16px;
`;

const Name = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 1280px) / 640)), 21px);
  font-weight: 700;
`;
1280
const Position = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 1280px) / 640)), 21px);
`;

function SocialProofCard({ data, index, activeIndex}) {

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