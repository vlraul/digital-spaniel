import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import OriginalTabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import CardList from "./CardList";
import Heading from "../common/Heading";
import OriginalWrapper from "../common/Wrapper";

const Wrapper = styled(OriginalWrapper)`
  .tab-content > .fade {
    transition: 0.3s ease-in-out;
  }
`;


const Tabs = styled(OriginalTabs)`
  display: flex;
  flex-direction: row;
  font-size: clamp(16px, calc(16px + 4 * ((100vw - 1280px) / 640)), 20px);
  border: none;
  padding: clamp(48px, calc(48px + 24 * ((100vw - 1280px) / 640)), 72px) 0
           clamp(12px, calc(12px + 12 * ((100vw - 1280px) / 640)), 24px) 0
  ;
  
  .nav-link {
    color: #19293A;
    padding: 0 clamp(24px, calc(24px + 12 * ((100vw - 1280px) / 640)), 36px)
             0 clamp(24px, calc(24px + 12 * ((100vw - 1280px) / 640)), 36px)
    ;
    border: none;
    border-bottom: 1px solid #506473;
  }
  .nav-link:hover {
    border-color: unset;
  }
  
  .nav-link.active {
    color: #19293A;
    font-weight: 700;
    border-color: #C0345E;
  }
`;


function Projects() {
  const { data, loading } = useFetch('/api/projects');
  const [activeCategory, setActiveCategory] = useState('all');

  if (!data){
    return null;
  }

  const categories = Object.keys(data);

  return (
    <Wrapper>
      <Heading>
        <span>Some of our</span>
        <br/>
        recent projects
      </Heading>
      <Tabs
        activeKey={activeCategory}
        transition={true}
        onSelect={(e) => setActiveCategory(e)}
        className="mb-3"
      >
        {
          categories.map((category, index) => (
            <Tab eventKey={category} title={data[category].categoryName} key={index}>
              <CardList data={data[category].data}/>
            </Tab>
          ))
        }
      </Tabs>
    </Wrapper>
  )
}

export default Projects;