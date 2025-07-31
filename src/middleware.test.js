import superagent from 'superagent';
import { getAPIResourceWithAuth } from './middleware';

jest.mock('superagent');
jest.mock('@plone/volto/registry', () => ({
  settings: {
    apiPath: 'http://localhost:8080/Plone',
    internalApiPath: null,
    legacyTraverse: false,
  },
}));

describe('getAPIResourceWithAuth', () => {
  let mockSuperagent;
  let mockReq;

  beforeEach(() => {
    mockReq = {
      path: '/@@flourish/flourish.embed.js',
      query: {},
      universalCookies: {
        get: jest.fn(),
      },
    };

    mockSuperagent = {
      get: jest.fn(),
      maxResponseSize: jest.fn(),
      responseType: jest.fn(),
      set: jest.fn(),
      use: jest.fn(),
      then: jest.fn((cb) => {
        cb({
          statusCode: 200,
          body: 'test',
          get: (header) =>
            header === 'content-type' ? 'application/javascript' : null,
        });
        return mockSuperagent;
      }),
      catch: jest.fn().mockReturnThis(),
    };

    mockSuperagent.get.mockReturnValue(mockSuperagent);
    mockSuperagent.maxResponseSize.mockReturnValue(mockSuperagent);
    mockSuperagent.responseType.mockReturnValue(mockSuperagent);
    mockSuperagent.set.mockReturnValue(mockSuperagent);
    mockSuperagent.use.mockReturnValue(mockSuperagent);

    superagent.get.mockReturnValue(mockSuperagent);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructs correct URL for direct path requests', async () => {
    await getAPIResourceWithAuth(mockReq);

    expect(superagent.get).toHaveBeenCalledWith(
      'http://localhost:8080/Plone/++api++/@@flourish/flourish.embed.js',
    );
  });

  test('constructs correct URL when js query param is present', async () => {
    mockReq.path = '/@@flourish';
    mockReq.query.js = 'flourish.embed.js';

    await getAPIResourceWithAuth(mockReq);

    expect(superagent.get).toHaveBeenCalledWith(
      'http://localhost:8080/Plone/++api++/@@flourish/flourish.embed.js',
    );
  });

  test('sets auth token in headers when present', async () => {
    mockReq.universalCookies.get.mockReturnValue('test-token');

    await getAPIResourceWithAuth(mockReq);

    expect(mockSuperagent.set).toHaveBeenCalledWith(
      'Authorization',
      'Bearer test-token',
    );
  });
});
