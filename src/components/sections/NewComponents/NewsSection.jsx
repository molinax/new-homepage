import styled from "styled-components"

import { NewContent } from './NewContent'
import { newsCollection } from '../../utilities/data'
import { softOrange, veryDarkBlue } from '../../utilities/variables'

const NewsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  background-color: ${veryDarkBlue};
  width: 100%;
  height: 100%;
  max-width: 26.6rem;
  padding: 2.5rem 1.5rem;
  grid-column: 5 / -1;

  @media screen and (min-width: 860px) {
    align-self: start;
  }
`

const NewsSectionTitle = styled.h2`
  color: ${softOrange};
  font-size: 2rem;
`

const NewsSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.3rem;

  height: 100%;
`

export const NewsSection = () => {
  return (
    <NewsSectionContainer>
      <NewsSectionTitle>New</NewsSectionTitle>
      
      <NewsSectionContentContainer>
        {
          newsCollection.map((newItem) => (
            <NewContent
              key={newItem.title}
              title={newItem.title}
              paragraph={newItem.paragraph}
            />
          ))
        }
      </NewsSectionContentContainer>
    </NewsSectionContainer>
  )
}
