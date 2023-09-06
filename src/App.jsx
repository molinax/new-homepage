import { GlobalStyles } from "./components/base/GlobalStyles"
import { Wrapper } from "./components/base/Wrapper"
import { Main } from "./components/base/Main"
import { Header } from "./components/base/Header"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />

        <Main />
      </Wrapper>
    </>
  )
}
