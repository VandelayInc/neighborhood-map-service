const request = require('supertest');
const app = require('./app.js');

describe('Server Request Handling', () => {
  it('should respond to the GET request', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200)));

  it('should respond with json data', () =>
    request(app).get('/api/19570882').then(response =>
      expect(response.text).toContain('Yeeman')));

  it('should respond with error status code when requesting invalid URL', () =>
    request(app).get('/wrong/url').then(response =>
      expect(response.statusCode).toBe(404)));


  it('should respond with 500 status code when requesting invalid listing number', () =>
    request(app).get('/api/42').then(response =>
      expect(response.statusCode).toBe(500)));
});
