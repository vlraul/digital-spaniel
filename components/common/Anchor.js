import styled from "styled-components";

const Anchor = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  margin-right: auto;
  color: #19293A;

  &:after {
    content: '';
    background-color: #C0345E;
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: -3px;
    width: 0;
    height: 2px;
    transition: 0.2s ease width;
  }
  &:hover {
    text-decoration: none;
    cursor: pointer;
    
    &:after {
      width: 100%;
    }
  }
`;

export default Anchor;