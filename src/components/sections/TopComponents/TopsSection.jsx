import { TopContent } from "./TopContent"
import { topsCollection } from "../../utilities/data"
import styled from "styled-components"

const TopsSectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;

  width: 100%;
  grid-column: 1 / -1;
`

export const TopsSection = () => {
  return (
    <TopsSectionContainer>
      {
        topsCollection.map((topItem) => (
          <TopContent
            key={topItem.ranking}
            img={topItem.img}
            altImg={topItem.altImg}
            ranking={topItem.ranking}
            title={topItem.title}
            paragraph={topItem.paragraph}
          />
        ))
      }
    </TopsSectionContainer>
  )
}
