import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import config from '@plone/volto/registry';
import { useLocation } from 'react-router-dom';
import flourishMiddleware from '../middleware';

const FlourishViewWidget = (props) => {
  //TODO: check if have flouris??!?!?!
  const flourish_url = props.value.download.replace(
    '/@@download/flourish_zip',
    '/@@flourish/index.html',
  );
  return (
    <iframe
      src={flourish_url}
      height="400"
      width="100%"
      title="Iframe Example"
    ></iframe>
  );
};

export default FlourishViewWidget;
