const expect = require('chai').expect;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs'])).deep.to.equal(['Lighthouse', 'Labs']);
  });

  it("returns [] for ['Hello']", () => {
    expect(tail(['Hello'])).deep.to.equal([]);
  });

  it("returns [] for []", () => {
    expect(tail([])).deep.to.equal([]);
  });

});