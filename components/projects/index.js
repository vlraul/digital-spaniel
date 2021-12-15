import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Tabs_ from 'react-bootstrap/Tabs';
import Tab_ from 'react-bootstrap/Tab'
import CardList from "./CardList";
import Heading from "../common/Heading";

const Wrapper = styled.div`
  padding: 100px 300px 100px 300px;
  
  .tab-content > .fade {
    transition: 0.3s ease-in-out;
  }
`;

const Tab = styled(Tab_)`

`;

const Tabs = styled(Tabs_)`
  display: flex;
  flex-direction: row;
  //gap: 24px;
  font-size: 20px;
  border: none;
  padding: 72px 0 36px 0;
  
  .nav-link {
    color: #19293A;
    padding: 0 36px 0 36px;
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
  const [key, setKey] = useState('all');




  if(!data){
    return null;
  }

  const keys = Object.keys(data);

  return (
    <Wrapper>
      <Heading>
        <span>Some of our</span>
        <br/>
        recent projects
      </Heading>
      <Tabs
        activeKey={key}
        transition={true}
        onSelect={(e) => setKey(e)}
        className="mb-3"
      >
        {
          keys.map((key, index) => (
            <Tab eventKey={key} title={data[key].categoryName} key={index}>
              <CardList data={data[key].data}/>
            </Tab>
          ))
        }
      </Tabs>
    </Wrapper>
  )
}

export default Projects;