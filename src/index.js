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
  return config;
};

export default applyConfig;
