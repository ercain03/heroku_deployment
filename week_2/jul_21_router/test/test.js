const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

require('../getServer');

describe('testing get function', () => {
  it('GET /hello return hello world', (done) => {
    request('localhost:3000')
      .get('/api/hello')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200, '');
        expect(res.text).to.eql('{"msg": "hello world"}');
        done();
      });
  });
});
