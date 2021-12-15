import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import Heading_ from "../common/Heading";
import Anchor_ from "../common/Anchor";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  margin-top: -120px;
  
  @media (max-width: 768px) {
    display: block;
    margin-top: 0;
  }
`;

const Heading = styled(Heading_)`

  @media (max-width: 768px) {
    span {
      -webkit-text-fill-color: #C0345E; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(54, 54, 54, 0.49);
    }
  }
`;

const Anchor = styled(Anchor_)`
  @media (max-width: 768px) {
    color: white;
    :hover {
      color: white;
    }
  }
`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  padding-left: clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px);
  display: flex;
  flex-direction: column;
  gap: clamp(20px, calc(20px + 20 * ((100vw - 768px) / 1152)), 40px);
  align-self: center;
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 150px 50px;
    color: white;
  }
`;

const Tags = styled.p`
  color: #C0345E;
  font-size: clamp(14px, calc(14px + 2 * ((100vw - 768px) / 1152)), 16px);
  margin: 0;

  @media (max-width: 768px) {
    color: white;
  }
`;

const Description = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 768px) / 1152)), 21px);
  max-width: 400px;
  margin: 0;
`;


function Hero () {
  return (
    <Wrapper>
      <HeroContent>
        <Tags>
          BRAND, DEV, ECOM, MARKETING
        </Tags>
        <Heading>
          <span>We unleash</span>
          <br/>
          business potential
        </Heading>
        <Description>
          We create brand experiences which are memorable and distinct.
          Our experienced team create and develop brands with personality and resonance.
        </Description>
        <Link href={'/'} passHref>
          <Anchor>
            Let's talk
          </Anchor>
        </Link>
      </HeroContent>
      <HeroImage src={'/images/spaniel.png'}/>
    </Wrapper>
  )
}

export default Hero;