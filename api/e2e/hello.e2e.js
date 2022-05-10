const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello end point', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () => request(app)
      .get('/')
      .expect(200)
      // eslint-disable-next-line no-shadow
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
