import styled from "styled-components";
import 'fontsource-poppins';
import BGI from '../../assets/FundoG.svg'

interface BackgroundProps {
    src: string;
}

export const BannerView = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #22a2f2;
    border-top-right-radius: 15.6px; /* 24px * 0.65 */
    border-bottom-right-radius: 15.6px; /* 24px * 0.65 */
    box-shadow: 0 0 6.5px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
    padding: 16px 40px 16px 0px;     
    margin: 39px 0 52px 0; 
 
    @media (max-width: 768px) {
        padding: 10px 10px 10px 0px;
        margin: 20px 0 20px 0; 
    }
    
    
`;


export const HelloMessage = styled.text`
    color: white;
    font-size: 31.2px; /* 48px * 0.65 */
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const SubMessage = styled.text`
    color: white;
    font-size: 19.5px; /* 30px * 0.65 */
    font-weight: 400;
    margin-right: 6.5px; /* 10px * 0.65 */
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 8px; /* 10px * 0.65 */
    }
    
`;

export const SubAreaMessage = styled.text`
    color: #001238;
    font-size: 19.5px; /* 30px * 0.65 */
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

export const ReturnArrow = styled.img`
    width: 16.25px; /* 25px * 0.65 */
    height: 16.25px; /* 25px * 0.65 */
    z-index: 1;
    margin: 0 19.5px; /* 30px * 0.65 */
    @media (max-width: 768px) {
        margin: 0 13px; /* 30px * 0.65 */
    }
`;

export const TTicon = styled.img`
    width: 65px; /* 100px * 0.65 */
    height: 65px; /* 100px * 0.65 */
    margin-right: 13px; /* 20px * 0.65 */
    @media (max-width: 768px) {
        width: 45px; /* 100px * 0.65 */
        height: 45px; /* 100px * 0.65 */
    }
`;
