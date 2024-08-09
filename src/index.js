import installBlocks from './blocks';
import { FlourishViewWidget } from './widgets';

const applyConfig = (config) => {
  if (__SERVER__) {
    const express = require('express');
    const flourishApiHandler = require('./middleware').default;

    const middleware = express.Router();
    middleware.all('**/@@flourish/**', flourishApiHandler);
    middleware.id = 'flourish';

    config.settings.expressMiddleware = [
      ...config.settings.expressMiddleware,
      middleware,
    ];
  }
  config.widgets.views.id.flourish_zip = FlourishViewWidget;
  return [installBlocks].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
