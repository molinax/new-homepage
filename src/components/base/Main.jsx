import styled from "styled-components"

import { HeroSection } from "../sections/HeroSection"
import { NewsSection } from "../sections/NewComponents/NewsSection"
import { TopsSection } from "../sections/TopComponents/TopsSection"

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  height: 100%;
  
  @media screen and (min-width: 860px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }

  @media screen and (min-width: 1010px) {
    height: 95%;
  }

`

export const Main = () => {
  return (
    <MainWrapper>
      <HeroSection />

      <NewsSection />
      
      <TopsSection />
    </MainWrapper>
  )
}
