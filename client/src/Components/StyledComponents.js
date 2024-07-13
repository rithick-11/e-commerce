import styled from "styled-components";

export const LogBgDiv = styled.section`
  background-image: url("${(prop) => prop.img}");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBannerDiv = styled.div`
  background-image: linear-gradient(to top, #000000, #ffffff00),
    url("${(prop) => prop.img}");
  background-size: cover;
  background-position: center;
  display: flex;
  height:60vh;
  flex-direction: column;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;
