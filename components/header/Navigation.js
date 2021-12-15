import React from 'react';
import styled from "styled-components";
import _Link from 'next/link';
import Anchor_ from "../common/Anchor";

const Link = styled(_Link)`


`;

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
  gap: 64px;
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
