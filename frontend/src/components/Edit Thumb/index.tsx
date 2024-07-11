import { Image, ImageBorder, LockImg, ThumbnailArea, ThumbnailBottom, ThumbnailContainer,  ThumbnailMonitor, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView, TopText, TypeBorder } from './styled';
import { UrlBase } from '../../services/api';
import Locked from '../../assets/fi_home.svg';

interface ThumbnailProps {
    Title: string;
    Monitor: string;
    Link: string;
    Type: string;
    imageUrl: string;
    Data:string;
    Lock: string;
}

export default function EditThumbnail({ Title, Monitor, Link,imageUrl, Lock, Type,Data }:ThumbnailProps){
    return (
        <ThumbnailView href={Link}>
            <ThumbnailContainer>
                <TypeBorder>
                <ThumbnailArea>{Type}</ThumbnailArea>
                </TypeBorder>
                {Lock === 'bloqueado' ? (<LockImg src={Locked} />) : (null)}
            {imageUrl && (<><ImageBorder/><Image src={`${UrlBase}${imageUrl}`}></Image></>)}
            </ThumbnailContainer>
            <ThumbnailBottom>
                <ThumbnailTextContainer>
                <TopText>
                <ThumbnailTitle>{Title}</ThumbnailTitle>
                <ThumbnailMonitor>{Data}</ThumbnailMonitor>
                </TopText>
                <ThumbnailMonitor>{Monitor}</ThumbnailMonitor>
                </ThumbnailTextContainer>
            </ThumbnailBottom>
        </ThumbnailView>
    );
};