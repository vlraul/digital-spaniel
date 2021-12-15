import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import SocialProofCard from "./SocialProofCard";
import Indicator from "./Indicator";
import Heading from "../common/Heading";

const Wrapper = styled.div`
  padding: 100px 300px 100px 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
`;

const Indicators = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;


function Testimonial() {
  const { data, loading } = useFetch('/api/testimonials');
  const [activeIndex, setActiveIndex] = useState(1);
  console.log(activeIndex);

  if(!data) {
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
          data.map((item, index) => <SocialProofCard data={item} index={index} activeIndex={activeIndex} />)
        }
      </Container>
      <Indicators>
        {
          data.map((item, index) => <Indicator index={index} activeIndex={activeIndex} updateIndex={(index) => setActiveIndex(index)}/> )
        }
      </Indicators>
    </Wrapper>
  )
}

export default Testimonial;