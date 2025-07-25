import superagent from 'superagent';
import config from '@plone/volto/registry';
import { addHeadersFactory } from '@plone/volto/helpers/Proxy/Proxy';

const HEADERS = [
  'accept-ranges',
  'cache-control',
  'content-disposition',
  'content-range',
  'content-type',
  'x-sendfile',
  'x-accel-redirect',
  'x-robots-tag',
];
export const getAPIResourceWithAuth = (req) =>
  new Promise((resolve, reject) => {
    const { settings } = config;
    const APISUFIX = settings.legacyTraverse ? '' : '/++api++';
    let path = req.path;
    if (req.query.js) {
      path = path.split('?')[0] + '/' + req.query.js;
    }
    let apiPath = '';
    if (settings.internalApiPath && __SERVER__) {
      apiPath = settings.internalApiPath;
    } else if (__DEVELOPMENT__ && settings.devProxyToApiPath) {
      apiPath = settings.devProxyToApiPath;
    } else {
      apiPath = settings.apiPath;
    }

    console.log('Request Path:', path);

    const request = superagent
      .get(`${apiPath}${__DEVELOPMENT__ ? '' : APISUFIX}${path}`)
      .maxResponseSize(settings.maxResponseSize)
      .responseType('blob');
    const authToken = req.universalCookies.get('auth_token');
    if (authToken) {
      request.set('Authorization', `Bearer ${authToken}`);
    }
    request.use(addHeadersFactory(req));
    request.then(resolve).catch(reject);
  });

export default function flourishMiddleware(req, res, next) {
  getAPIResourceWithAuth(req)
    .then((resource) => {
      // Just forward the headers that we need
      HEADERS.forEach((header) => {
        if (resource.get(header)) {
          res.set(header, resource.get(header));
        }
      });
      res.status(resource.statusCode);
      res.send(resource.body);
    })
    .catch(next);
}
