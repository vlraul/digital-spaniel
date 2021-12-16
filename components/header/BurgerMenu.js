import React from 'react';
import styled, { css } from "styled-components";
import Link from 'next/link';
import OriginalAnchor from "../common/Anchor";
import { createPortal } from "react-dom";

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #EDEFF1;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  transition: 0.3s;
  transform: translateX(100%);
  
  ${({ isOpen }) => isOpen && css`
    transform: translateX(0%);
  `}
`;

const Anchor = styled(OriginalAnchor)`
  margin: 0 auto;
  padding: 12px;
  font-size: 20px;

  &:after {
    background-color: #19293A;
  }
  :hover {
    color: #19293A;
  }
`;

const Button = styled.button`
  background: 0 0;
  border: none;
  margin-left: auto;
  padding: 46px 64px;
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function BurgerMenu({ isOpen, onClose }) {
  if (typeof document !== 'undefined') {
    return createPortal(
      <Wrapper isOpen={isOpen}>
        <Button onClick={onClose}>
          <img
            width={24}
            height={24}
            src="/icons/close.svg"
            alt="close button"
          />
        </Button>
        <NavList>
          <Link href={'/'} passHref>
            <Anchor>
              Services
            </Anchor >
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
        </NavList>
      </Wrapper>,
      document.getElementById('portal'),
    );
  }

  return null;
}

export default BurgerMenu;
