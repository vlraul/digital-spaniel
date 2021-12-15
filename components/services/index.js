import React, { useState } from "react";
import styled from 'styled-components';
import useFetch from "../hooks/useFetch";
import Content from "./Content";
import ServicesList from "./List";


const Wrapper = styled.div`
  padding: clamp(100px, calc(100px + 100 * ((100vw - 1280px) / 640)), 150px)
           clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px)
  ;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const Background = styled.div`
  width: 100%;
  background-color: #EDEFF1;
`;

function Services() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState('brand');
  const [isAnimating, setIsAnimating] = useState(false);
  const { data, loading } = useFetch('/api/services');

  if (!data) {
    return null;
  }

  return (
    <Background>
      <Wrapper>
        <Content activeSection={data[activeCategory][activeSection]} isAnimating={isAnimating}/>
        <ServicesList
          onChange={(key, index) => {
            setActiveSection(index);
            setActiveCategory(key);
          }}
          data={data}
          active={activeSection}
          startAnimation={() => setIsAnimating(true)}
          stopAnimation={() => setIsAnimating(false)}
        />
      </Wrapper>
    </Background>
  );
};

export default Services;