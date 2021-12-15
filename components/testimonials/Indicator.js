import React from "react";
import styled, { css } from "styled-components";

const Dot = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border: none;
  background-color: #C5C9CD;
  ${({activeIndex, index}) => activeIndex === index && css`
    background-color: #19293A;
    color: white;
    transform: scale(1.5);
  `}
`;

function Indicator({ index, activeIndex, updateIndex }) {
  console.log(activeIndex)

  return (
    <Dot
      index={index}
      activeIndex={activeIndex}
      onClick={() => updateIndex(index)}
    />
  )
}

export default Indicator;