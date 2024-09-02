const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputs are (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when inputs are (0.1, 0.3)', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -4 when inputs are (-1.6, -2.4)', () => {
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  it('should return 5 when inputs are (2.4, 2.6)', () => {
    assert.strictEqual(calculateNumber(2.4, 2.6), 5);
  });
});
