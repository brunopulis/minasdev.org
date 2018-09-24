import styled from "styled-components";
import jobsBackground from "@assets/images/background.jpg";

export const Wrapper = styled.section``;

export const ParallaxTop = styled.div`
  background-image: url(${jobsBackground});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  position: fixed;
  height: 170px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    height: 200px;
  }

  @media screen and (max-width: 767px) {
    height: 210px;
  }
`;

export const ParallaxBottom = styled.div`
  position: relative;
  top: 170px;

  @media screen and (max-width: 1023px) {
    top: 200px;
  }

  @media screen and (max-width: 767px) {
    top: 210px;
  }
`;
