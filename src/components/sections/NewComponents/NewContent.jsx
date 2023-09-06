import styled from "styled-components"

import { grayishBlue } from "../../utilities/variables"

const NewContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NewTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`
const NewParagraph = styled.p`
  color: ${grayishBlue};
  line-height: 1.4rem;
`

const NewSeparator = styled.hr`
  color: ${grayishBlue};
  opacity: .5;
`

export const NewContent = ({ title, paragraph }) => {
  return (
    <NewContainer>
      <NewTitle>{title}</NewTitle>

      <NewParagraph>{paragraph}</NewParagraph>

      <NewSeparator />
    </NewContainer>
  )
}
