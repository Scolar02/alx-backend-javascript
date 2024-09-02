const request = require('supertest');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return the correct message', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect('Welcome to the payment system', done);
  });
});
