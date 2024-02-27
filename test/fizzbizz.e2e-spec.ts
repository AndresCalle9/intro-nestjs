import {Test, TestingModule} from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('FizzBuzz (e2e)', () => {
    let app: INestApplication;
    
    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
        }).compile();
    
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    
    it('GET /fizzbuzz/3 should return Fizz', () => {
        return request(app.getHttpServer())
        .get('/fizzbuzz/3')
        .expect(200)
        .expect('Fizz');
    });
    
    it('GET /fizzbuzz/5 should return Buzz', () => {
        return request(app.getHttpServer())
        .get('/fizzbuzz/5')
        .expect(200)
        .expect('Buzz');
    });
    
    it('GET /fizzbuzz/15 should return FizzBuzz', () => {
        return request(app.getHttpServer())
        .get('/fizzbuzz/15')
        .expect(200)
        .expect('FizzBuzz');
    });
})