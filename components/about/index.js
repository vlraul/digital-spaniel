import React from "react";
import styled, { css } from "styled-components";
import Heading_ from "../common/Heading";
import useFetch from "../hooks/useFetch";
import Gallery from "./Gallery";
import Anchor_ from "../common/Anchor";
import Link from "next/link";

const Wrapper = styled.div`
  padding: clamp(50px, calc(50px + 100 * ((100vw - 1280px) / 640)), 150px) 0;
  
`;

const Background = styled.div`
  width: 100%;
  background-color: #EDEFF1;
`;

const Heading = styled(Heading_)`
  padding: 0 clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px);
  max-width: 1920px;
  margin: 0 auto 64px auto;
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px) 
           50px clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px)
  ;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const Anchor = styled(Anchor_)`
  margin-right: 0;
`;

function About() {
  const { data, loading } = useFetch('api/gallery');

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