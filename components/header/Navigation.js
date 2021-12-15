import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import Anchor_ from "../common/Anchor";

const Anchor = styled(Anchor_)`
  color: white;

  &:after {
    background-color: white;
  }
  :hover {
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: clamp(32px, calc(32px + 16 * ((100vw - 1280px) / 640)), 48px);

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navigation () {
  return (
    <Wrapper>
      <Link href={'/'} passHref>
        <Anchor>
          Services
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor>
          Work
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor>
          About
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor>
          Blog
        </Anchor>
      </Link>
      <Link href={'/'} passHref>
        <Anchor>
          Contact
        </Anchor>
      </Link>
    </Wrapper>
  )
}

export default Navigation;
