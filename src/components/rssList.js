import React from 'react';
import RssListItem from './rssListItem';

const RssListComponent = ({ rssesCount, rsses }) => 
  (
    <RssListItem
      rssesCount={rssesCount}
      rsses={rsses}
    />
  )

export default RssListComponent;