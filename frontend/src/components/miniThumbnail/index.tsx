import { AulaImg, LockImg, ThumbnailBottom, ThumbnailContainer, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from "./styled";
import Locked from '../../assets/fi_home.svg';
import { useEffect, useState } from "react";
import userServices from "../../services/userServices";

interface ThumbnailProps {
  Title: string;
  Monitor: string;
  imageUrl: any;
  Link: string;
  PDF: string;
  Lock: string;
  onGo: (link: string) => void;
}

export default function MiniThumb({ Title, Monitor, imageUrl, Link, PDF, Lock, onGo }: ThumbnailProps) {

  const handleClick = () => {
    if (Lock !== 'bloqueado') {
      onGo(Link);
    }
   
  }; 
  const [imageApi, setImageApi] = useState('')
  useEffect(() => {
      userServices.getImage().then((response) => {
        if (response) {
        
          setImageApi(response);
        
        }
      });
    }, []);

  return (
    <ThumbnailView onClick={handleClick}>
      <ThumbnailContainer>
      {Lock === 'bloqueado' ? (<LockImg src={Locked} />) : (null)}
      </ThumbnailContainer>
      <ThumbnailBottom>
        <ThumbnailTextContainer>
          <ThumbnailTitle>
            {Title}
          </ThumbnailTitle>
        </ThumbnailTextContainer>
      </ThumbnailBottom>
      {imageUrl && (<AulaImg  src={`${imageApi}/${imageUrl}`} locked={Lock} />)} 
    </ThumbnailView>
  );
}