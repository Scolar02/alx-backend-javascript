const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are (SUM, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are (SUBTRACT, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are (DIVIDE, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are (DIVIDE, 1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type'
      });
    });
  });
});
