const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Create a spy for console.log
    consoleSpy = sinon.spy(console, 'log');

    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restore the original functions
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with type = SUM, a = 100, b = 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
