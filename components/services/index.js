import React, { useState } from "react";
import styled from 'styled-components';
import useFetch from "../hooks/useFetch";
import Content from "./Content";
import ServicesList from "./ServicesList";
import OriginalWrapper from "../common/Wrapper";


const Wrapper = styled(OriginalWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

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
`;

function Services() {
  const [activeSection, setActiveSection] = useState({category: 'brand', index: 0});
  const [isAnimating, setIsAnimating] = useState(false);
  const { data, loading } = useFetch('/api/services');

  if (!data) {
    return null;
  }

  return (
      <Wrapper>
        <Content activeSection={data[activeSection.category][activeSection.index]} isAnimating={isAnimating}/>
        <ServicesList
          onChange={(category, index) => {
            setActiveSection({
              category,
              index
            });
          }}
          data={data}
          active={activeSection}
          startAnimation={() => setIsAnimating(true)}
          stopAnimation={() => setIsAnimating(false)}
        />
      </Wrapper>
  );
};

export default Services;