import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: clamp(30px, calc(30px + 30 * ((100vw - 768px) / 1152)), 60px);;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: clamp(60px, calc(60px + 120 * ((100vw - 768px) / 1152)), 120px);
  row-gap: clamp(30px, calc(30px + 30 * ((100vw - 768px) / 1152)), 60px);;
`;

const Category = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 768px) / 1152)), 21px);
  font-weight: 500;
  text-transform: uppercase;
  color: #19293A;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 768px) / 1152)), 21px);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  
  :after {
    content: "«";
    padding-left: 16px;
    position: absolute;
    opacity: 0;
    top: 0;
    transition: 0.3s;
  }
  
  :hover:after {
    opacity: 1;
    padding-left: 8px;
  }
  
`;



function ServicesList ({ onChange, startAnimation, stopAnimation, data }) {
  if (!data) {
    return null;
  }
  const keys = Object.keys(data);

  return (
    <Wrapper>
      {
        keys.map((key, index) => (
          <div key={index} >
            <Category>
              {key}
            </Category>
            <List>
              {data[key].map((item, index) => (
                <ListItem
                  onMouseOver={() => onChange(key, index)}
                  onMouseEnter={startAnimation}
                  onMouseLeave={stopAnimation}
                  key={index}
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          </div>
        ))
      }
    </Wrapper>
  )
}

export default ServicesList;