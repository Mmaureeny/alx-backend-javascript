const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const sendingSpy = sinon.spy(console); 
    const fake = sinon.stub(Utils, 'calculateNumber');

    fake.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(fake.calledWith('SUM', 100, 20)).to.be.true;
    expect(fake.callCount).to.be.equal(1);
    expect(sendingSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(sendingSpy.log.callCount).to.be.equal(1);
    fake.restore();
    sendingSpy.log.restore();
  });
}); 
