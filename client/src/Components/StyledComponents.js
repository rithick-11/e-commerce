import styled from "styled-components";

export const LogBgDiv = styled.section`
  background-image: url("${prop => prop.img}");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
