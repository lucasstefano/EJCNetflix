import React from 'react';
import { AulaImg, LockImg, ThumbnailBottom, ThumbnailContainer, ThumbnailTextContainer, ThumbnailTitle, ThumbnailView } from "./styled";
import Locked from '../../assets/fi_home.svg';
import DsAula from '../../assets/DS-aula.png';

interface ThumbnailProps {
  Title: string;
  Monitor: string;
  Image: any;
  Link: string;
  PDF: string;
  Lock: string;
  onGo: (link: string) => void;
}

export default function MiniThumb({ Title, Monitor, Image, Link, PDF, Lock, onGo }: ThumbnailProps) {

  const handleClick = () => {
    if (Lock !== 'bloqueado') {
      onGo(Link);
    }
    // You can add an else condition here if needed
  };

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
      {Image === '' ? null : <AulaImg src={Image} locked={Lock} />} {/* Adjust image source handling */}
    </ThumbnailView>
  );
}
