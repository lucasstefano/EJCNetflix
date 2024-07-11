import styled from "styled-components";
import 'fontsource-poppins';
import BGI from '../../assets/ThumbnailBG.svg'
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  border-radius: 8px;
`;


export const LockImg = styled.img`
    width: 50px; /* 150px * 0.65 */
    height: 50px; /* 150px * 0.65 */
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 0;
    user-select: none;
`;

export const ThumbnailView = styled.a`
    position: relative;
    text-decoration: none;
    width: 30vw; /* 450px * 0.65 */
    height: 260.9px; /* 386px * 0.65 */
    flex-direction: column;
    border-bottom-right-radius: 13px; /* 20px * 0.65 */
    border-bottom-left-radius: 13px; /* 20px * 0.65 */
    display: flex;
    margin: 0px 16px 20px 16px;
   
`;



export const ThumbnailContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #001238;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: block;
    position: relative;
`;



export const ThumbnailBottom = styled.div`
    width: 30vw; /* 450px * 0.65 */
    height: 150px; /* 146px * 0.65 */
    align-self: flex-end;
    display: flex;
    border-bottom-right-radius: 6px; /* 20px * 0.65 */
    border-bottom-left-radius: 6px; /* 20px * 0.65 */
    flex-direction: row;
    position: relative;

    
`;

export const ThumbnailTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0px 0px 0px; /* 20px * 0.65 */
`;

export const ThumbnailTitle = styled.text`
    font-size: 16.9px; /* 26px * 0.65 */
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    line-height: 22px;
    color: white;
    user-select: none;
`;

export const ThumbnailMonitor = styled.text`
    font-size: 13px; /* 20px * 0.65 */
    user-select: none;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    opacity: 0.7;
    color: white;
`;


export const ThumbnailButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 13px;
    justify-content: center;
    flex-direction: column;
    gap: 13px; /* 20px * 0.65 */
`;

export const ThumbnailButton = styled.a`
    width: 32px; /* 50px * 0.65 */
    height: 32px; /* 50px * 0.65 */
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#22A2F2, #2287F3);
    border-radius: 100%;
    box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
    &:hover{
        background: linear-gradient(#146698,#144c87);
    }
`;

export const TopText = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
`;
export const ThumbnailIcon = styled.img`
    width: 15.6px; /* 24px * 0.65 */
    height: 15.6px; /* 24px * 0.65 */
`;
export const ImageBorder = styled.div`    
    position: absolute;
    width: 100%;
    display: flex; 
    height: 100%;
    align-items: center;
    justify-content: center;

`;

export const ThumbnailArea = styled.div`
    font-size: 13px; /* 20px * 0.65 */
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
    opacity: 1;
    color: white;
`;
export const TypeBorder = styled.div`
    position: absolute;
    right: 0;
    padding: 8px 20px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 3px;
    background: #055cb9;
`;