import request from 'supertest'
import {test,expect,} from 'vitest'
import app from '../../../app'


test('GET user id', async()=>{
const res = await request(app).get("/users/123");
  expect(res.status).toBe(200);
  expect(res.body.id).toBe("123");
})
