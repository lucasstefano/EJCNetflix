import React from 'react';
import { LockImg, ThumbnailBottom, ThumbnailButton, ThumbnailButtonContainer, ThumbnailContainer, ThumbnailIcon, ThumbnailImg, ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from './styled';
import Locked from '../../assets/fi_home.svg';
import PlayerIcon from '../../assets/player-Icon.svg';
import PresentationIcon from '../../assets/apresentacao-icon.svg';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    Link: string;
    imageUrl: string;
}

export default function EditThumbnail({ Title, Monitor, Link,imageUrl }:ThumbnailProps){

    return (
        <ThumbnailView href={Link}>
            <ThumbnailContainer>
            {imageUrl && (
                <div>
               
                </div>
            )}
            </ThumbnailContainer>
            <ThumbnailBottom>
                <ThumbnailTextContainer>
                    <ThumbnailTitle>{Title}</ThumbnailTitle>
                    <ThumbnailMonitor>{Monitor}</ThumbnailMonitor>
                </ThumbnailTextContainer>
                 
            </ThumbnailBottom>
        </ThumbnailView>
    );
};

