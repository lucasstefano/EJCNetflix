import { useEffect, useState } from 'react';
import { Image, ImageBorder, ThumbnailArea, ThumbnailBottom, ThumbnailContainer,  ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from './styled';
import userServices from '../../services/userServices';
import { UrlBase } from '../../services/api';

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

            {imageUrl && (<><ImageBorder/><Image src={`${UrlBase}${imageUrl}`}></Image></>)}
            </ThumbnailContainer>
            <ThumbnailBottom>
                <ThumbnailTextContainer>
                    <ThumbnailArea>{Type}</ThumbnailArea>
                    <ThumbnailTitle>{Title}</ThumbnailTitle>
                    <ThumbnailMonitor>{Monitor}</ThumbnailMonitor>
                </ThumbnailTextContainer>
            </ThumbnailBottom>
        </ThumbnailView>
    );
};