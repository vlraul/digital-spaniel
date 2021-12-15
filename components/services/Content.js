import React, { useState } from "react";
import Heading from "../common/Heading";
import Link from "next/link";
import Anchor from "../common/Anchor";
import styled, { css } from "styled-components";
import Description_ from "../common/Description";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: center;
  margin-right: auto;
`;

const Description = styled(Description_)`
  opacity: 0;

  ${({isAnimating}) => isAnimating && css`
    animation: fadeIn 0.3s forwards;
  `}
  ${({isAnimating}) => !isAnimating && css`
    animation: fadeOut 0.3s forwards;
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  };
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  };
`;

function Content ({ activeSection, isAnimating }) {

  if (!activeSection) {
    return null;
  }

  return (
    <Wrapper>
      <Heading>
        <span>What are</span>
        <br/>
        we capable of
      </Heading>
      <Description isAnimating={isAnimating}>
        {activeSection.description}
      </Description>
      <Link href={'/'} passHref>
        <Anchor>
          Our process
        </Anchor>
      </Link>
    </Wrapper>
  )
};

export default Content;