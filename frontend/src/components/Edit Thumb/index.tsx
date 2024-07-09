import { useEffect, useState } from 'react';
import { Image, ImageBorder, ThumbnailArea, ThumbnailBottom, ThumbnailContainer,  ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from './styled';
import userServices from '../../services/userServices';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    Link: string;
    Type: string;
    imageUrl: string;
}

export default function EditThumbnail({ Title, Monitor, Link,imageUrl, Type }:ThumbnailProps){
    return (
        <ThumbnailView href={Link}>
            <ThumbnailContainer>

            {imageUrl && (<><ImageBorder/><Image src={`${imageUrl}`}></Image></>)}
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