import styled from "styled-components";
import 'fontsource-poppins';
import BGI from '../../assets/ThumbnailBG.svg'
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
`;

export const ImageLock = styled.div`    
    position: absolute;
    width: 100%;
    display: flex;
    height: 100%;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background: #000000dd;

`;

export const ThumbnailView = styled.div`
    position: relative;
    width: 292.5px; /* 450px * 0.65 */
    height: 260.9px; /* 386px * 0.65 */
    flex-direction: column;
    border-bottom-right-radius: 13px; /* 20px * 0.65 */
    border-bottom-left-radius: 13px; /* 20px * 0.65 */
    background: #000000;
    display: flex;
    margin: 0px 16px 20px 16px;
    box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
    @media (max-width: 768px) {
        box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.3); 
    }
`;

export const LockImg = styled.img`
    width: 110px; /* 150px * 0.65 */
    height: 110px; /* 150px * 0.65 */
    position: absolute;
    z-index: 0;
`;

export const ThumbnailContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #001238;
    align-items: center;
    justify-content: center;
    display: block;
    position: relative;
`;

export const ThumbnailImg = styled.img`


`;


export const ThumbnailBottom = styled.div`
    width: 292.5px; /* 450px * 0.65 */
    height: 150px; /* 146px * 0.65 */
    align-self: flex-end;
    background: linear-gradient(#22A2F2, #2287F3);
    display: flex;
    border-bottom-right-radius: 6px; /* 20px * 0.65 */
    border-bottom-left-radius: 6px; /* 20px * 0.65 */
    flex-direction: row;
    position: relative;
    background-image: url(${BGI});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    
    
`;

export const ThumbnailTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 13px 0px 13px; /* 20px * 0.65 */
`;

export const ThumbnailTitle = styled.text`
    font-size: 16.9px; /* 26px * 0.65 */
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    line-height: 22px;
    color: white;
`;

export const ThumbnailMonitor = styled.div`
    font-size: 13px; /* 20px * 0.65 */
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
    align-items: center;
    justify-content: center;
    background: linear-gradient(#22A2F2, #2287F3);
    border-radius: 100%;
    box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
    &:hover{
        background: linear-gradient(#146698,#144c87);

    }
    
`;

export const ThumbnailIcon = styled.img`
    width: 15.6px; /* 24px * 0.65 */
    height: 15.6px; /* 24px * 0.65 */
`;
