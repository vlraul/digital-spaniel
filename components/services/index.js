import React, { useState } from "react";
import styled from 'styled-components';
import useFetch from "../hooks/useFetch";
import Content from "./Content";
import ServicesList from "./List";


const Wrapper = styled.div`
  background-color: #EDEFF1;
  padding: 150px 300px 150px 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  );
};

export default Services;