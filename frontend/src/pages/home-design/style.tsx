import styled from "styled-components";
import BGI from '../../assets/FundoG.svg'
interface BackgroundImageProps {
    src: string;
    position: "bottom-left" | "top-right" | "bottom-right";
}

export const RightSide = styled.div`    
    position: relative;
  
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    background-image: url(${BGI});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5; /* Adjust the opacity value as needed */
    z-index: -1; /* Ensure the background is behind the content */
  }
`;

export const AulasContainer = styled.div`
    padding: 0 0px 26px 0px; /* 40px * 0.65 */
    display: flex; 


`;

export const TitleContainer = styled.div`
    flex-direction: column;
    margin: 0 0 26px 0; /* 40px * 0.65 */
`;

export const TitleAulas = styled.text`
    font-size: 31.2px; /* 48px * 0.65 */
    font-weight: 700;
    color: #001238;
    margin: 0 0 0 26px; /* 40px * 0.65 */
`;

export const SubLine = styled.div`
    width: 348px; /* 520px * 0.65 */
    height: 3.25px; /* 5px * 0.65 */
    background: #001238;
`;

export const BGImg = styled.img`
    position: absolute;
    top: 0;
    opacity: 0.5;
    height: 842px; /* 1296px * 0.65 */
    width: 100%;
    z-index: -1; 
`;

export const BGImgSword = styled.img`
    position: absolute;
    top: 0;
    z-index: -1; 
`;

export const BGCUTImg = styled.img`
    position: absolute;
    right: 0;
    bottom: -507px; /* -780px * 0.65 */
    z-index: -1; 
`;

export const CronoImg = styled.img`
    width: 35px; /* 100px * 0.65 */
    height: 35px; /* 100px * 0.65 */
   
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    opacity: 0.9;
    width: 50%;
    height: 50%;
    bottom: 0px;
    right: 0px;
   
`;

export const BackgroundImage2 = styled.img`
    position: absolute;
    opacity: 0.9;
    width: 100%;
    height: 100vh;
    left: -380px;
    bottom: 0px;

    
`;
export const BackgroundImageG = styled.img<BackgroundImageProps>`
    position: absolute;
    background-image: url(${(props) => props.src});
    z-index: -2;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;
`;
export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.94);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 10%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  z-index: 1;
  gap: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;


export const CalendarButton = styled.button`
  width: 65px; /* 100px * 0.65 */
  height: 65px; /* 100px * 0.65 */
  border: none;
  border-radius: 100%;
  background: linear-gradient(#22A2F2,#2287F3);
  cursor: pointer;
  color: white;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3); /* 10px * 0.65 */
  margin-right: 13px; /* 20px * 0.65 */
`;


