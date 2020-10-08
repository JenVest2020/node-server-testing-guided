const server = require('./server');
const request = require('supertest');
const { intersect } = require('../data/dbConfig');


describe('server.js', () => {
    it('should run in a testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return 200 (async)', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);

        });
        // this takes Content-type value from Header (see postman)
        it('should return json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return {api: "up"} ', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: 'up' });
        });
    });
});