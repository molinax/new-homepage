import { useState, useEffect } from "react"
import styled from "styled-components"

import { MainShadow } from "./MainShadow"
import { softOrange, veryDarkBlue } from "../utilities/variables"
import { linksCollection } from "../utilities/data"
import { headerImagesCollection } from "../utilities/images"

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 .5rem;
  margin-bottom: 2rem;
`

const HeaderLogo = styled.img`
  width: 2.5rem;
`

const IconMenuHeader = styled.img`
  cursor: pointer;
  width: ${(props) => props.$closeMenu ? "1.6rem" : "1.8rem"};
  height: ${(props) => props.$closeMenu ? "1.5rem" : "1.4rem"};
`
const HeaderMenu = styled.nav`
  display: flex;
`

const HeaderMenuMobile = styled(HeaderMenu)`
  flex-direction: column;
  gap: 10rem;

  position: absolute;
  top: 0;
  right: 0;
  
  padding: 1.5rem 1.8rem 1.5rem 1.5rem;
  background-color: white;
  width: 65vw;
  height: 100%;
`

const IconMenuClose = styled(IconMenuHeader)`
  align-self: end;
`

const HeaderMenuList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.$desktopList === "desktop" ? "row" : "column"};
  gap: 2.5rem;
`

const HeaderMenuItem = styled.a`
  color: ${veryDarkBlue};
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: ${softOrange};
    transition: .2s;
  }
`

export const Header = () => {
  const [menuSwitch, setIsMenuSwitch] = useState(false)
  const [viewportWidth, setIsViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const viewport = window.innerWidth
      setIsViewportWidth(viewport)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMenu = () => setIsMenuSwitch(!menuSwitch)

  const handleMenuItem = (viewList = "mobile") => {
    if (viewList === "desktop" || viewList === "mobile") {
      return (
        <HeaderMenuList $desktopList={viewList}>
          {
            linksCollection.map(linkItem => {
              return (
                <li key={linkItem}>
                  <HeaderMenuItem href="#">{linkItem}</HeaderMenuItem>
                </li>
              )
            })
          }
        </HeaderMenuList>
      )
    }
  }

  return (
    <HeaderContainer>
      <HeaderLogo src={headerImagesCollection[0]} alt="Logo" />

      { viewportWidth < 860 && <IconMenuHeader src={headerImagesCollection[1]} alt="Icon menu open" onClick={() => handleMenu()} /> }

      {
        viewportWidth < 860 ?
          <MainShadow $menuSwitch={menuSwitch}>
            <HeaderMenuMobile>
              <IconMenuClose $closeMenu={true} src={headerImagesCollection[2]} alt="Icon menu close" onClick={() => handleMenu()} />
              <HeaderMenuList>
                {handleMenuItem()}
              </HeaderMenuList>
            </HeaderMenuMobile>
          </MainShadow>
          :
          <HeaderMenu>
            {handleMenuItem("desktop")}
          </HeaderMenu>
      }

    </HeaderContainer>
  )
}
