import React from "react";
import styled, {css} from "styled-components";
import Link from 'next/link';
import Anchor_ from "../common/Anchor";

const Wrapper = styled.div`
  display: block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  min-width: 200px;
  min-height: 200px;
  @media (min-width: 1071px) {
  ${({ isDouble }) => isDouble && css`
      grid-column-end: span 2;
  `};
  }
`;

const Image = styled.img`
  position: absolute;
  top:0;
  
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 36px;
  background-image: linear-gradient(0, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s;

  :hover{
    opacity: 1;
  }
`;

const Title = styled.p`
  margin: 0 0 16px 0;
  color: white;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 0 0 32px 0;
  color: white;
  font-size: 18px;
`;

const Anchor = styled(Anchor_)`
  color: white;

  &:after {
    background-color: white;
  }
  :hover {
    color: white; 
  }
`;


function Card ({ data }) {

  if(!data){
    return null;
  }

  return (
    <Wrapper isDouble={data.isDouble}>
        <Image src={data.imageURL}/>
      <Content>
        <Title>
          {data.title}
        </Title>
        <Description>
          {data.description}
        </Description>
        <Link href={data.url} passHref>
          <Anchor>
            Full project
          </Anchor>
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Card;