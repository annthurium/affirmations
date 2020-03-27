const request = require("supertest")
const server = require("../index")
const affirmations = require('../affirmations')

describe('GET Affirmation Endpoints', () => {
  it('should return a random affirmation', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(affirmations).toContain(res.body['affirmation']);
  });
});
