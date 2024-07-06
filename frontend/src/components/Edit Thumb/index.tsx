import { useEffect, useState } from 'react';
import { Image, ThumbnailArea, ThumbnailBottom, ThumbnailContainer,  ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from './styled';
import userServices from '../../services/userServices';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    Link: string;
    Type: string;
    imageUrl: string;
}

export default function EditThumbnail({ Title, Monitor, Link,imageUrl, Type }:ThumbnailProps){
    const [imageApi, setImageApi] = useState('')
    useEffect(() => {
        userServices.getImage().then((response) => {
          if (response) {
            console.log('vai',response)
            setImageApi(response);
          
          }
        });
      }, []);
    return (
        <ThumbnailView href={Link}>
            <ThumbnailContainer>
            {imageUrl && (<Image src={`${imageApi}/${imageUrl}`}></Image>)}
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