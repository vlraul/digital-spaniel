import styled from "styled-components";

const Heading = styled.h1`
  //font-family: 'Gothic A1', sans-serif;
  font-size: clamp(36px, calc(36px + 12 * ((100vw - 768px) / 1152)), 48px);
  font-weight: 700;
  margin: 0;
  
  span {
    color: #19293A;
  }
`;

export default Heading;