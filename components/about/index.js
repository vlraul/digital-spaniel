import React from "react";
import styled, { css } from "styled-components";
import OriginalHeading from "../common/Heading";
import useFetch from "../hooks/useFetch";
import Gallery from "./Gallery";
import OriginalAnchor from "../common/Anchor";
import Link from "next/link";
import Wrapper from "../common/Wrapper";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  padding: 150px 0;

  :before {
    content: '';
    background-color: #EDEFF1;
    width: 100vw;
    left: calc(50% - 50vw);
    top: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 768px) {
   padding: 50px 0;
  }

`;

const Heading = styled(OriginalHeading)`
  max-width: 1920px;
  margin: 0 auto 64px auto;
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 50px 50px 50px;
  }
`;

const Anchor = styled(OriginalAnchor)`
  margin-right: 0;
`;

function About() {
  const { data, loading } = useFetch('api/gallery');

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      <Heading>
        <span>What are</span>
        <br/>
        we all about?
      </Heading>
      <Background>
        <Gallery data={data} />
        <Container>
          <Link href={'/'} passHref>
            <Anchor>
              About
            </Anchor>
          </Link>
          <Link href={'/'} passHref>
            <Anchor>
              Careers
            </Anchor>
          </Link>
        </Container>
      </Background>
    </Wrapper>
  )
}

export default About;