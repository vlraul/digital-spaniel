import styled from "styled-components";

const Wrapper = styled.div`
  padding: clamp(100px, calc(100px + 50 * ((100vw - 1280px) / 640)), 150px)
           clamp(100px, calc(100px + 200 * ((100vw - 1280px) / 640)), 300px)
  ;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

export default Wrapper;