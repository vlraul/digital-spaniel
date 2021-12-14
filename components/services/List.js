import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 120px;
  row-gap: 60px;
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
  font-size: 21px;
  text-decoration: none;
`;

const Category = styled.p`
  font-size: 21px;
  text-transform: uppercase;
  color: #19293A;
`;

function ServicesList ({ onChange, data }) {
  if (!data) {
    return null;
  }
  const keys = Object.keys(data);

  return (
    <Wrapper>
      {
        keys.map((key) => (
          <div>
            <Category>
              {key}
            </Category>
            <List>
              {data[key].map((item, index) => (
                <ListItem
                  onMouseOver={() => onChange(key, index)}
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