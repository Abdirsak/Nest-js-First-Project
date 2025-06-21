/* eslint-disable */
import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(
    @Query('limit', new DefaultValuePipe(10), new ParseIntPipe()) limit: number,
    @Query('page', new DefaultValuePipe(1), new ParseIntPipe()) page: number,
    @Query('isMarried')
    isMarried?: boolean,
  ) {
    const userServices = new UsersService();
    console.log(`Limit: ${limit}, Page: ${page}`);
    console.log(`Is Married: ${isMarried}`);
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
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userServices = new UsersService();
    return userServices.getUserById(id);
  }
}
