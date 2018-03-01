const request = require('supertest');
const app = require('./app.js');

describe('Test the root path', () =>
  it('should respond to the GET request', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200))));
