import React, { useEffect, useState } from 'react';
import { LockImg, ThumbnailBottom, Image,ThumbnailButton, ThumbnailButtonContainer, ThumbnailContainer, ThumbnailIcon, ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView, ImageLock, ThumbnailImg } from './styled';
import Locked from '../../assets/fi_home.svg';
import PlayerIcon from '../../assets/player-Icon.svg';
import PresentationIcon from '../../assets/apresentacao-icon.svg';
import userServices from '../../services/userServices';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    imageUrl: any;
    Link: string;
    PDF: string;
    Lock: string;
    AbrirVideo: () => void;
    EnviarLink: (Link: string) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ Title, Monitor, imageUrl, Link, PDF, Lock, AbrirVideo, EnviarLink }) => {
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
                {Lock === 'bloqueado' ? (<ImageLock><LockImg src={Locked} /></ImageLock>) : (null)}
                {imageUrl && (<Image src={`${imageUrl}`}></Image>)}

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
