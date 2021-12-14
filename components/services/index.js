import React, { useState } from "react";
import styled from 'styled-components';
import useFetch from "../hooks/useFetch";
import Content from "./Content";
import ServicesList from "./List";


const Wrapper = styled.div`
  background-color: #EDEFF1;
  padding: 300px 300px 0 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function Services() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState('brand');
  const { data, loading } = useFetch('/api/services');

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      <Content activeSection={data[activeCategory][activeSection]} />
      <ServicesList
        onChange={(key, index) => {
          setActiveSection(index);
          setActiveCategory(key);
        }}
        data={data}
        active={activeSection}
      />
    </Wrapper>
  );
};

export default Services;