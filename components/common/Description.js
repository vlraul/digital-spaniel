import styled from "styled-components";

const Description = styled.p`
  font-size: clamp(16px, calc(16px + 5 * ((100vw - 768px) / 1152)), 21px);
  height: 150px;
  max-width: 400px;
  margin: 0;
`;

export default Description;