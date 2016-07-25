'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

const server = require('../server');

describe('Http Server testing', () => {
  it('Test put function', (done) => {
    request(server)
      .put('/api/hello')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{"msg": "hello world"}');
        done();
      });
  });
});
