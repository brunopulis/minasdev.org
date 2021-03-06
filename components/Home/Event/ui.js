import styled from "styled-components"

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`

export const Time = styled.time`
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  color: #242424;

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #e64c3b;
    margin: 8px 0;
  }
`

export const Title = styled.h2`
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.85rem;
  color: #242424;
  margin-bottom: 13px;
  overflow: hidden;
`

export const Community = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  max-width: 65%;
`

export const Link = styled.a`
  align-self: baseline;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  font-style: italic;
  border-bottom: 1px solid #e64c3b;
  color: #e64c3b;
  display: inline-block;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    font-size: 0.65rem;
  }
`
