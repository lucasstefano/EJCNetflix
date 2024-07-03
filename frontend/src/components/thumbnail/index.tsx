import React from 'react';
import { LockImg, ThumbnailBottom, ThumbnailButton, ThumbnailButtonContainer, ThumbnailContainer, ThumbnailIcon, ThumbnailImg, ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from './styled';
import Locked from '../../assets/fi_home.svg';
import PlayerIcon from '../../assets/player-Icon.svg';
import PresentationIcon from '../../assets/apresentacao-icon.svg';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    Image: any;
    Link: string;
    PDF: string;
    Lock: string;
    AbrirVideo: () => void;
    EnviarLink: (Link: string) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ Title, Monitor, Image, Link, PDF, Lock, AbrirVideo, EnviarLink }) => {
    const PdfLink = PDF;
    const handleClick = () => {
        if (Lock !== 'bloqueado') {
            AbrirVideo();
            EnviarLink(Link);
        }
    };
    return (
        <ThumbnailView>
            <ThumbnailContainer>
                {Lock === 'bloqueado' ? (<LockImg src={Locked} />) : (null)}
                <ThumbnailImg src={''} locked={Lock}></ThumbnailImg>

            </ThumbnailContainer>
            <ThumbnailBottom>
                <ThumbnailTextContainer>
                    <ThumbnailTitle>{Title}</ThumbnailTitle>
                    <ThumbnailMonitor>{Monitor}</ThumbnailMonitor>
                </ThumbnailTextContainer>
                <ThumbnailButtonContainer>
                    {Lock === 'bloqueado' ? (
                        <>
                            <ThumbnailButton onClick={() => EnviarLink(Link)}>
                                <ThumbnailIcon src={PlayerIcon} />
                            </ThumbnailButton>
                            <ThumbnailButton>
                                <ThumbnailIcon src={PresentationIcon} />
                            </ThumbnailButton>
                        </>
                    ) : (
                        <>
                            <ThumbnailButton onClick={handleClick}>
                                <ThumbnailIcon src={PlayerIcon} />
                            </ThumbnailButton>
                            <ThumbnailButton href={PdfLink} target="_blank" rel="noopener noreferrer">
                                <ThumbnailIcon src={PresentationIcon} />
                            </ThumbnailButton>
                        </>
                    )}
                </ThumbnailButtonContainer>
            </ThumbnailBottom>
        </ThumbnailView>
    );
};

export default Thumbnail;
