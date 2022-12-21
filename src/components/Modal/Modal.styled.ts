import styled from "styled-components";

export const StyledModal: any = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  cursor: zoom-out;
  padding: 10px;
  pointer-events: ${(props: any) => (props.isOpen ? "all" : "none")};
  opacity: ${(props: any) => Number(props.isOpen)};
  transition: 0.5s;
`;

export const StyledModalContent: any = styled.div`
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all;
  transform: scale(${(props: any) => props.temp});
  cursor: auto;
`;

export const StyledImg: any = styled.img`
  width: 600px;
  height: 600px;
`;
