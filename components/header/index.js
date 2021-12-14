import React from 'react';
import styled from "styled-components";
import Navigation from "./Navigation";
import dynamic from 'next/dynamic';

const Logo = styled.img`
  height: 80px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 32px 172px 32px 172px;
  z-index: 1;
  
`;

const StickyHeadroom = dynamic(
  ()=> import('@integreat-app/react-sticky-headroom'),
  { ssr: false}
)

class Header extends React.Component {
  state = {
    stickyTop: 0,
  }

  onStickyTopChanged = (stickyTop) => {
    this.setState({ stickyTop })
  }


render() {
    return (
      <StickyHeadroom pinStart={0} height={144} scrollHeight={144}
                      onStickyTopChanged={this.onStickyTopChanged}>
        <Wrapper>
          <Logo src={'/images/digital-spaniel-logo.png'} />
          <Navigation />
        </Wrapper>
      </StickyHeadroom>
      )
}


}

export default Header;
