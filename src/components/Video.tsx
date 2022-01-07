import React from 'react';
import { VideoContainer, HTML5Video } from './Video.components';

type Props = {
  sourceUrl: string;
  title: string;
  isIFramed?: boolean;
};

function Video({ sourceUrl, title, isIFramed = true }: Props) {
  return (
    <VideoContainer>
      {isIFramed ? (
        <iframe
          src={sourceUrl}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <HTML5Video controls>
          <source src={sourceUrl} type="video/mp4" />
        </HTML5Video>
      )}
    </VideoContainer>
  );
}

export default Video;
