import React from 'react';
import styled, { css } from "styled-components";
import Link from 'next/link';
import OriginalAnchor from "../common/Anchor";

const Anchor = styled(OriginalAnchor)`
  color: white;

  &:after {
    background-color: white;
  }
  :hover {
    color: white;
  }
  
  ${({invertTextColor}) => invertTextColor && css`
    color: #19293A;

    &:after {
      background-color: #19293A;
    }
    :hover {
      color: #19293A;
    }
  `};
`;

const Wrapper = styled.div`
  display: flex;
  gap: clamp(32px, calc(32px + 16 * ((100vw - 1280px) / 640)), 48px);

  @media (max-width: 768px) {
    display: none;
  }
  
`;

function Navigation({ invertTextColor }) {
  return (
    <Wrapper >
      <Link href={'/'} passHref>
        <Anchor invertTextColor={invertTextColor}>
          Services
        </Anchor >
      </Link>
      <Link href={'/'} passHref>
        <Anchor invertTextColor={invertTextColor}>
          Work
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor invertTextColor={invertTextColor}>
          About
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor invertTextColor={invertTextColor}>
          Blog
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor invertTextColor={invertTextColor}>
          Contact
        </Anchor>
      </Link>
    </Wrapper>
  )
}

export default Navigation;
