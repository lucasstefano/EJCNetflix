import styled from "styled-components";
import 'fontsource-poppins';

interface ThumbnailImgProps {
    locked: string;
}

export const ThumbnailView = styled.a`
    position: relative;
    width: 210px; /* 450px * 0.65 */
    height: 120px; /* 386px * 0.65 */
    flex-direction: column;
    border-top-right-radius: 13px; /* 20px * 0.65 */
    border-top-left-radius: 13px; /* 20px * 0.65 */
    border-radius: 6.5px; /* 10px * 0.65 */
    background: #000000;
    opacity: 0.4;
    display: flex;
    border: 1px solid grey;
    margin: 0px 16px 20px 16px;
    box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
    &:hover{
        opacity: 1;

    }
    
`;

export const AulaImg = styled.img<ThumbnailImgProps>`
    width: 100%; /* 150px * 0.65 */
    height: 100%; /* 150px * 0.65 */
    position: absolute;
    opacity: ${props => (props.locked === 'bloqueado' ? '0.2' : '0.8')};
    transition: opacity 0.3s ease;
    
`;

export const LockImg = styled.img`
    width: 80px; /* 150px * 0.65 */
    height: 80px; /* 150px * 0.65 */
    top: 15px;
    z-index: 2;
    position: absolute;
`;

export const ThumbnailContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const ThumbnailImg = styled.img`
    width: 292.5px; /* 450px * 0.65 */
    height: 250.9px; /* 386px * 0.65 */
    border-radius: 6.5px; /* 10px * 0.65 */
`;

export const ThumbnailBottom = styled.div`
    width: 180px; /* 450px * 0.65 */
    height: 50px; /* 146px * 0.65 */
    display: flex;
    flex-direction: row;
`;

export const ThumbnailTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.5px; /* 10px * 0.65 */
    width: 100%;
    padding: 13px 13px 13px 13px; /* 20px * 0.65 */
`;

export const ThumbnailTitle = styled.text`
    font-size: 12px; /* 26px * 0.65 */
    font-weight: 600;
    color: white;
    font-family: 'Poppins', sans-serif;
    z-index: 1;
    user-select: none;
`;

export const ThumbnailMonitor = styled.div`
    font-size: 13px; /* 20px * 0.65 */
    font-weight: 600;
    opacity: 0.6;
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
    width: 32.5px; /* 50px * 0.65 */
    height: 32.5px; /* 50px * 0.65 */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#22A2F2, #2287F3);
    border-radius: 100%;
    box-shadow: 0 0 6.5px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
`;

export const ThumbnailIcon = styled.img`
    width: 15.6px; /* 24px * 0.65 */
    height: 15.6px; /* 24px * 0.65 */
`;