import {test,expect,vi} from 'vitest'
import {UserService} from '../../src/services/user.service'
import {User,UserRepository } from '../../src/repositories/user.repo'


test('GET user id success', async()=>{
  const mockUser: User = { id: 1, name: "James QA", age: 30 };
  const mockRepo:UserRepository ={
    findById: vi.fn().mockResolvedValue(mockUser)
  }
  const service = new UserService(mockRepo)
  const result = await service.getUserById(1);
  expect(result).toEqual(mockUser);
  expect(mockRepo.findById).toHaveBeenCalledWith(1);
})
