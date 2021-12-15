import React from "react";
import styled, { css } from "styled-components";

const Dot = styled.button`
  width: clamp(18px, calc(18px + 6 * ((100vw - 768px) / 1152)), 24px);
  height: clamp(18px, calc(18px + 6 * ((100vw - 768px) / 1152)), 24px);
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

  return (
    <Dot
      index={index}
      activeIndex={activeIndex}
      onClick={() => updateIndex(index)}
    />
  )
}

export default Indicator;