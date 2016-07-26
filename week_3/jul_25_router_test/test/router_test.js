'use strict';

const expect = require('chai').expect;
const Router = require('../');

describe('The Router', function() {
  beforeEach(function() {
    this.router = new Router('/api');
  });

  it('should be properly set up', function() {
    expect(this.router.baseUrl).to.eql('/api');
    expect(this.router.routes).to.be.an('object');
    expect(this.router.routes.GET).to.be.an('object');
    expect(this.router.routes.POST).to.be.an('object');
    expect(this.router.routes.PUT).to.be.an('object');
    expect(this.router.routes.PATCH).to.be.an('object');
    expect(this.router.routes.DELETE).to.be.an('object');
  });

  it('should call route functions', function() {
    let called;
    let testRes = {
      'test': true
    };
    let testReq = {
      method: 'GET',
      url: '/api/test' 
    };
    this.router.get('/test', function(req, res) {
      called = true;
      expect(res.test).to.eql(true);
    })
    this.router.route()(testReq, testRes);
    expect(called).to.eql(true);
  });

  it('should have a 404 page', function() {
    let called = 0;
    let testReq = {
      method: 'GET',
      url: 'doesnotexist'      
    };

    let testRes = {
      writeHead: function(statusCode, header) {
        called++;
        expect(statusCode).to.eql(404);
        expect(header['Content-Type']).to.eql('text/plain');
      },
      write: function(text) {
        called++;
        expect(text).to.eql('that page does not exist');
      },
      end: function() {
        called++;
      }
    };
    this.router.route()(testReq, testRes);
    expect(called).to.eql(3);
  });
});
