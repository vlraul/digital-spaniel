import styled from "styled-components";

const Anchor = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(14px, calc(14px + 6 * ((100vw - 768px) / 1152)), 20px);
  font-weight: 600;
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
    transition: 0.3s ease width;
  }
  &:hover {
    color: #19293A;
    text-decoration: none;
    cursor: pointer;
    
    &:after {
      width: 100%;
    }
  }
`;

export default Anchor;