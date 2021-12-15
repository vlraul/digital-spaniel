import React from "react";
import styled from "styled-components";
import Link_ from 'next/link';
import Heading from "../common/Heading";
import Anchor from "../common/Anchor";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
`;

const HeroContent = styled.div`
  padding-left: clamp(100px, calc(100px + 200 * ((100vw - 768px) / 1152)), 300px);
  display: flex;
  flex-direction: column;
  gap: clamp(20px, calc(20px + 20 * ((100vw - 768px) / 1152)), 40px);
  align-self: center;
  margin-right: auto;
`;

const Tags = styled.p`
  color: #C0345E;
  font-size: 16px;
  margin: 0;
`;



const Description = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 768px) / 1152)), 21px);
  max-width: 400px;
  margin: 0;
`;

const Link = styled(Link_)`
  
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