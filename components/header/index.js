import React, { useState } from 'react';
import styled, { css } from "styled-components";
import Navigation from "./Navigation";
import dynamic from 'next/dynamic';
import BurgerMenu from "./BurgerMenu";

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
  overflow: hidden;
  ${({hasBackground}) => hasBackground && css`
    :before {
      content: '';
      background-color: #EDEFF1;
      width: 100vw;
      left: calc(50% - 50vw);
      top: 0;
      height: 100%;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
  `};

  @media (max-width: 768px) {
    //background-color: #EDEFF1;
    position: static;
    padding: 32px 50px;
  }
  
`;

const BurgerButton = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 14px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;



const StickyHeadroom = dynamic(
  ()=> import('@integreat-app/react-sticky-headroom'),
  { ssr: false}
)

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function openSlider() {
    setIsOpen(true);
  }

  function closeSlider() {
    setIsOpen(false);
  }

  const onStickyTopChanged = (stickyTop) => {
    setIsSticky(!!stickyTop);
  }

  return (
    <StickyHeadroom pinStart={0} height={144} scrollHeight={144}
                    onStickyTopChanged={onStickyTopChanged}>
      <Wrapper hasBackground={isSticky} >
        <Logo src={'/images/digital-spaniel-logo.png'} />
        <Navigation invertTextColor={isSticky}/>
        <BurgerButton onClick={openSlider}>
          <img
            height={24}
            width={24}
            src="/icons/hamburger.svg"
            alt=""
          />
        </BurgerButton>
        <BurgerMenu isOpen={isOpen} onClose={closeSlider} />
      </Wrapper>
    </StickyHeadroom>
  )

}

export default Header;
