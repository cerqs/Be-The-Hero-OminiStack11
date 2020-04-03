const request = require ('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
       await connection.migrate.rollback(); 
       await connection.migrate.latest();
    });

    afterAll( async ()=> {
        await connection.destroy();
    });

    it('Teste criar nova ONG' , async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"AAC2D",
	        email: "mail@email.com",
	        whatsapp:1197771111,
	        city:"Mogi",
	        uf:"SP"	
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});