import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    gender: string;
    age: number;
    isMaried: boolean;
  }[] = [
    {
      id: 1,
      name: 'Abdirizak Abdullahi',
      gender: 'Male',
      age: 23,
      isMaried: false,
    },
    {
      id: 2,
      name: 'Abdiqani Abdirahman',
      gender: 'Male',
      age: 23,
      isMaried: false,
    },
    {
      id: 3,
      name: 'Sahra Abdirahman',
      gender: 'Female',
      age: 26,
      isMaried: true,
    },
  ];
  getAllUsers() {
    return this.users;
  }
  createUser(user: {
    id: number;
    name: string;
    gender: string;
    age: number;
    isMaried: boolean;
  }) {
    this.users.push(user);
    return 'User created successfully!';
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not found!';
    }
    return user;
  }
}
