import styled from "styled-components";
import BGI from '../../assets/FundoG.svg'
import 'fontsource-poppins';

interface BackgroundImageProps {
    src: string;
    position: "bottom-left" | "top-right" | "bottom-right";
}

export const ScreenView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 0px;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    flex-direction: column;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background:   #2287F3;
    opacity: 0.5; 
    z-index: -1; 
  }

`;

export const ButtonsView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 140px;
    width: 100%;

    border-radius: 40px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        gap: 34px;
        flex-direction: column;
    }
`;

export const AreaButton = styled.a`
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 15vw;
    border-radius: 100%;
    border: 0px;
    text-decoration: none;
    background: linear-gradient(-45deg,#22A2F2,#2287F3);
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.3);
    &:hover {
        background: linear-gradient(#146698,#144c87);;
  }
  @media (max-width: 768px) {
        width: 35vw;
        height: 35vw;
    }
  
`;

export const AreaIcon = styled.img`
    width: 10vw;
    height: 10vw;
    @media (max-width: 768px) {
        width: 20vw;
        height: 20vw;
    }
`;

export const AreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AreaText = styled.p`
    font-size: 24px;
    color:#001238;
    font-weight: 400;
    margin: 10px 0 0 0;
    font-family: 'Poppins', sans-serif;
    user-select: none;
`;

export const AreaTextBold = styled.p`
    font-size: 24px;
    color: #001238;
    font-weight: 700;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    user-select: none;
`;

export const WelcomeImgContainer = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    position: absolute;
    bottom: 0px;
    @media (max-width: 768px) {
        position: relative;
        margin-bottom: 20px;
        
        
    }
    @media (max-width: 400px) {
        position: relative;
        margin-bottom: 20px;
        
    }
`;
export const WelcomeImg1 = styled.img`
    width: 15vw;
    @media (max-width: 768px) {
        width: 50vw;

    }
    
    
`;

export const WelcomeImg2 = styled.img`
    width: 48vw;
    @media (max-width: 768px) {
        width: 90vw;

    }
`;

export const BackgroundImage = styled.img<BackgroundImageProps>`
    position: absolute;
    ${(props) => props.position === "bottom-left" && "bottom: 0;  width: 100%;"}
    ${(props) => props.position === "top-right" && "top: 0;    width: 30%; right: 0;"}
    ${(props) => props.position === "bottom-right" && "bottom: 0;    width: 30%; left: 0;"}
    opacity: 0.9;
    background-image: url(${(props) => props.src});
    z-index: -1;
`;
