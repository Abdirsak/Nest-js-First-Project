import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(@Query() query: any) {
    const queryParams = { ...query };
    const userServices = new UsersService();
    if (query.gender) {
      return userServices
        .getAllUsers()
        .filter((user) => user.gender === query.gender);
    }
    return userServices.getAllUsers();
  }

  @Post()
  createUser() {
    const newUser = {
      id: 3,
      name: 'Abdiwahab Abdirahman',
      gender: 'Male',
      age: 23,
      isMaried: false,
    };
    const userServices = new UsersService();
    return userServices.createUser(newUser);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const userServices = new UsersService();
    return userServices.getUserById(+id);
  }
}
