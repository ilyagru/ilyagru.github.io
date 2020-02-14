import React from 'react';
import PT from 'prop-types';

import { VideContainer, HTML5Video } from './Video.components';

const Video = ({ sourceUrl, title, isIFramed = true }) => (
  <VideContainer>
    {isIFramed ? (
      <iframe
        src={sourceUrl}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    ) : (
      <HTML5Video controls>
        <source src={sourceUrl} type="video/mp4" />
      </HTML5Video>
    )}
  </VideContainer>
);

Video.propTypes = {
  sourceUrl: PT.string,
  title: PT.string,
};

export default Video;
