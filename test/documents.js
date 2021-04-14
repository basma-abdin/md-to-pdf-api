


let chai = require('chai');
let chaiHttp = require('chai-http');
var expect = chai.expect
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('Documents converter', () => {
  describe('Convert Md template to PDF', () => {
      it('it should Return PDF file converted from MD template)', (done) => {
        let content ={
          content:'# Test Markdown'
        }
        chai.request(server)
            .post('/api/v1/documents/convert')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(content)
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.header['content-type']).to.equals('application/pdf')
                  expect(res.header['content-disposition']).to.equals('attachment; filename="converted.pdf"')
              done();
            });
      });
  });
  describe('Convert Md template to PDF, without body', () => {
      it('it should Return error 400 with message No data found)', (done) => {
        chai.request(server)
            .post('/api/v1/documents/convert')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send()
            .end((err, res) => {
                  res.should.have.status(400);
                  expect(res.header['content-type']).to.equals('application/json; charset=utf-8')
                  expect(res.body.error).to.equals('No data found')
              done();
            });
      });
  });



});