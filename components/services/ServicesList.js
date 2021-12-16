import React from "react";
import styled from "styled-components";
import SubItemsList from "./SubItemsList";

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

function ServicesList (
  {
    onChange,
    startAnimation,
    stopAnimation,
    data
  }) {
  const categories = Object.keys(data);

  return (
    <Wrapper>
      {
        categories.map((category, index) => (
          <div key={index} >
            <Category>
              {category}
            </Category>
            <SubItemsList
              startAnimation={startAnimation}
              stopAnimation={stopAnimation}
              data={data[category]}
              category={category}
              onChange={onChange}
            />
          </div>
        ))
      }
    </Wrapper>
  )
}

export default ServicesList;