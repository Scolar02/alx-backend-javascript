import chai from 'chai';
const expect = chai.expect;
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are (SUM, 1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are (SUBTRACT, 1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are (DIVIDE, 1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    });

    it('should return "Error" when inputs are (DIVIDE, 1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error, 'Invalid operation type');
    });
  });
});