import styled from "styled-components"

import { softRed, veryDarkBlue } from "../utilities/variables"

import heroImageMobile from "../../assets/images/image-web-3-mobile.jpg"
import heroImageDesktop from "../../assets/images/image-web-3-desktop.jpg"

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  height: 100%;
  align-self: start;
  grid-column: 1 / 5;
`

const HeroImg = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  grid-column: 1 / -1;

  @media screen and (min-width: 860px) {
    content: url(${heroImageDesktop});
    height: 100%;
  }
`

const HeroTitle = styled.h1`
  color: ${veryDarkBlue};
  font-size: 2.8rem;
  font-weight: 800;
  grid-column: 1 / -1;

  @media screen and (min-width: 560px) {
    grid-column: 1;
    font-size: 3.2rem;
  }

`

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  grid-column: 1 / -1;

  @media screen and (min-width: 560px) {
    grid-column: 2 / -1;
  }
`

const HeroParagraph = styled.p`
  font-size: .95rem;
  line-height: 1.6rem;

  @media screen and (min-width: 560px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
`

const HeroBtn = styled.button`
  color: white;
  cursor: pointer;
  border: none;
  background-color: ${softRed};
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 1.2rem;
  align-self: start;

  &:hover {
    background-color: ${veryDarkBlue};
  }
`

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImg src={heroImageMobile} alt="Hero illustration image" />

      <HeroTitle> The Bright Future of Web 3.0?</HeroTitle>

      <HeroContentContainer>
        <HeroParagraph>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
        </HeroParagraph>

        <HeroBtn>Read More</HeroBtn>
      </HeroContentContainer>
    </HeroContainer>
  )
}
