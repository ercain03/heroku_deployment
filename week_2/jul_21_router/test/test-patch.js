const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const expect = chai.expect;

describe('router test', () => {

  it('should update some data by routing the PATCH request', function(done) {
    request('localhost:3000')
      .patch('/api/patch')
      .end((err, res) => {
        expect(res.text).to.eql('patch');
        done();
      });
  });
});
