import styled from "styled-components"

import { grayishBlue, veryDarkBlue } from "../../utilities/variables"

const TopContainer = styled.article`
  display: flex;
  gap: 1.5rem;

  width: 100%;
`

const TopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const TopImg = styled.img`
  width: 6rem;
  height: auto;
`

const TopRanking = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${grayishBlue};
`

const TopTitle = styled.h3`
  color: ${veryDarkBlue};
`

export const TopContent = ({ img, altImg, ranking, title, paragraph }) => {
  return (
    <TopContainer>
      <TopImg src={img} alt={altImg} />

      <TopContentContainer>
        <TopRanking>{ranking}</TopRanking>

        <TopTitle>{title}</TopTitle>

        <p style={{lineHeight: "1.4rem" }}>{paragraph}</p>
      </TopContentContainer>
    </TopContainer>
  )
}
