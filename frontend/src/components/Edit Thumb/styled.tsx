import styled from "styled-components";
import 'fontsource-poppins';
import BGI from '../../assets/FundoG.svg'
interface ThumbnailImgProps {
    locked: string;
}

export const ThumbnailView = styled.a`
text-decoration: none;
    position: relative;
    width: 292.5px; /* 450px * 0.65 */
    height: 260.9px; /* 386px * 0.65 */
    flex-direction: column;
    border-bottom-right-radius: 13px; /* 20px * 0.65 */
    border-bottom-left-radius: 13px; /* 20px * 0.65 */
    background: #001238;
    display: flex;
    margin: 0px 16px 20px 16px;
    box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
`;

export const LockImg = styled.img`
    width: 97.5px; /* 150px * 0.65 */
    height: 97.5px; /* 150px * 0.65 */
    position: absolute;
`;

export const ThumbnailContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const ThumbnailImg = styled.img<ThumbnailImgProps>`
    width: 100%;
    height: auto;
    opacity: ${props => (props.locked === 'bloqueado' ? '0.2' : '1')};
    transition: opacity 0.3s ease;
`;


export const ThumbnailBottom = styled.div`
    width: 292.5px; /* 450px * 0.65 */
    height: 166px; /* 146px * 0.65 */
    align-self: flex-end;
    background: linear-gradient(#22A2F2, #2287F3);
    display: flex;
    border-bottom-right-radius: 6px; /* 20px * 0.65 */
    border-bottom-left-radius: 6px; /* 20px * 0.65 */
    flex-direction: row;
`;

export const ThumbnailTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px; /* 10px * 0.65 */
    width: 100%;
    padding: 13px 13px 0px 13px; /* 20px * 0.65 */
`;

export const ThumbnailTitle = styled.text`
    font-size: 16.9px; /* 26px * 0.65 */
    font-weight: 600;
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
