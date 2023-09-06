import styled from "styled-components"

export const MainShadow = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => props.$menuSwitch ? "0" : "-100%"};
  z-index: 99;

  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
`