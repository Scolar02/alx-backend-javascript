const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true).then((response) => {
      try {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the async operation is complete
      } catch (error) {
        done(error); // Pass the error to Mocha
      }
    });
  });
});
