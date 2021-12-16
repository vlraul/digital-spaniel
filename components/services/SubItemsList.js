import React from "react";
import styled from "styled-components";

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

function SubItemsList (
  {
    onChange,
    startAnimation,
    stopAnimation,
    data,
    category
  }) {

  return (
    <div>
      <List>
        {data.map((item, index) => (
          <ListItem
            onMouseOver={() => onChange(category, index)}
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
            key={index}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SubItemsList;