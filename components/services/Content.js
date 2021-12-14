import React from "react";
import Heading from "../common/Heading";
import Link from "next/link";
import Anchor from "../common/Anchor";
import styled from "styled-components";
import Description from "../common/Description";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: center;
  margin-right: auto;
`;

function Content ({ activeSection }) {
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
      <Description>
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