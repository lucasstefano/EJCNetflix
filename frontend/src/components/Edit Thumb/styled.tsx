import styled from "styled-components";
import 'fontsource-poppins';
import BGI from '../../assets/FundoG.svg'
interface ThumbnailImgProps {
    locked: string;
}

export const ImageBorder = styled.div`    
    position: absolute;
    width: 100%;
    display: flex; 
    height: 100%;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#fefefe1b,#01010132);

`;
export const ThumbnailView = styled.a`
text-decoration: none;
    position: relative;
    width: 392.5px; /* 450px * 0.65 */
    height: 100.9px; /* 386px * 0.65 */
    flex-direction: row;
    background: #001238;
    display: flex;
    margin: 0px 16px 20px 16px;
    box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
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

export const ThumbnailImg = styled.img<ThumbnailImgProps>`
    width: 100%;
    height: auto;
    opacity: ${props => (props.locked === 'bloqueado' ? '0.2' : '1')};
    transition: opacity 0.3s ease;
`;


export const ThumbnailBottom = styled.div`
    width: 475px; /* 450px * 0.65 */
    height: 100%; /* 146px * 0.65 */
    align-self: flex-end;
    background: linear-gradient(#22A2F2, #2287F3);
    display: flex;
    flex-direction: row;
`;

export const ThumbnailTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 13px 4px 0px 13px; /* 20px * 0.65 */
`;

export const ThumbnailTitle = styled.text`
    font-size: 15px; /* 26px * 0.65 */
    font-weight: 600;
    line-height: 20px;
    font-family: 'Poppins', sans-serif;
    color: white;
`;

export const ThumbnailMonitor = styled.div`
    font-size: 13px; /* 20px * 0.65 */
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    opacity: 0.6;
    color: white;
`;

export const ThumbnailArea = styled.div`
    font-size: 13px; /* 20px * 0.65 */
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    opacity: 1;
    color: white;
`;


export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
`;