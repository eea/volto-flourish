import express from 'express';
// import middleware from './middleware';
// import filesMiddleware from './middleware-files';

function filesMiddlewareFn(req, res, next) {
  getAPIResourceWithAuth(req)
    .then((resource) => {
      // Just forward the headers that we need
      HEADERS.forEach((header) => {
        if (resource.headers[header]) {
          res.set(header, resource.get(header));
        }
      });
      res.status(resource.statusCode);
      res.send(resource.body);
    })
    .catch(next);
}

function filesMiddleware() {
  const middleware = express.Router();
  console.log('filesMiddleware');
  middleware.all('**/@@flourish/**', filesMiddlewareFn);
  middleware.id = 'filesResourcesProcessor';
  return middleware;
}

const applyConfig = (config) => {
  if (__SERVER__) {
    // const express = require('express');
    // const middleware = express.Router();
    // const proxyMiddleware = require('./middleware').default;
    // middleware.all('**/@@flourish/**', proxyMiddleware);
    // middleware.id = 'danswer';
    config.settings.expressMiddleware = [
      ...config.settings.expressMiddleware,
      filesMiddleware,
      // middleware,
    ];
  }
  return config;
};

export default applyConfig;
