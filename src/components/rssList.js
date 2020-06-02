import React from 'react';
import RssListItem from './rssListItem';

const RssListComponent = ({ rssesCount, rsses, actions }) => 
  (
    <RssListItem
      rssesCount={rssesCount}
      rsses={rsses}
      actions={actions}
    />
  )

export default RssListComponent;