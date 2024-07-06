import React, { useState, useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeComponentProps {
  LinkVideo: string;
}

const YoutubeComponent: React.FC<YoutubeComponentProps> = ({ LinkVideo }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const opts: YouTubeProps['opts'] = {
    height: String(windowDimensions.height * 0.7), // Ajusta a altura para 50% da altura da janela
    width: String(windowDimensions.width * 0.8), // Ajusta a largura para 80% da largura da janela
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <YouTube videoId={LinkVideo} opts={opts} onReady={onPlayerReady} />
  );
}

export default YoutubeComponent;
