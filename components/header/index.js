import React, { useState } from 'react';
import styled from "styled-components";
import Navigation from "./Navigation";
import dynamic from 'next/dynamic';

const Logo = styled.img`
  height: clamp(60px, calc(60px + 20 * ((100vw - 1280px) / 640)), 80px);
`

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 100px;
  z-index: 1;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: static;
    padding: 32px 50px;
  }
  
`;

const StickyHeadroom = dynamic(
  ()=> import('@integreat-app/react-sticky-headroom'),
  { ssr: false}
)

function Header() {
  const [stickyTop, setStickyTop] = useState(0);

  const onStickyTopChanged = (stickyTop) => {
    setStickyTop(stickyTop)
  }

  return (
    <StickyHeadroom pinStart={0} height={144} scrollHeight={144}
                    onStickyTopChanged={onStickyTopChanged}>
      <Wrapper>
        <Logo src={'/images/digital-spaniel-logo.png'} />
        <Navigation />
      </Wrapper>
    </StickyHeadroom>
  )

}

export default Header;
