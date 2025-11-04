export interface User {
  id: number;
  name: string;
  age: number;
}

export interface UserRepository {
  findById(id: number): Promise<User | null>;
}
