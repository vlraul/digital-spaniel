import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import SocialProofCard from "./SocialProofCard";
import Indicator from "./Indicator";
import OriginalHeading from "../common/Heading";

const Wrapper = styled.div`
  padding: clamp(50px, calc(50px + 50 * ((100vw - 1280px) / 640)), 100px)
           clamp(80px, calc(80px + 160 * ((100vw - 1280px) / 640)), 240px)
  ;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const Heading = styled(OriginalHeading)`
  padding-left: clamp(20px, calc(20px + 40 * ((100vw - 1280px) / 640)), 60px);

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Indicators = styled.div`
  padding: clamp(60px, calc(60px + 60 * ((100vw - 768px) / 1152)), 120px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
`;


function Testimonial() {
  const { data, loading } = useFetch('/api/testimonials');
  const [activeIndex, setActiveIndex] = useState(1);

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      <Heading>
        <span>Kind words</span>
        <br/>
        from our clients
      </Heading>
      <Container>
        {
          data.map((item, index) => <SocialProofCard data={item} index={index} activeIndex={activeIndex} key={index}/>)
        }
      </Container>
      <Indicators>
        {
          data.map((item, index) => <Indicator index={index} activeIndex={activeIndex} updateIndex={(index) => setActiveIndex(index)} key={index}/> )
        }
      </Indicators>
    </Wrapper>
  )
}

export default Testimonial;