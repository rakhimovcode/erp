import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from './admin.entity';

@Resolver('admin')
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(()=>Admin)
  create(@Args("createAdmin") createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Query(()=>[Admin])
  findAllAdmins() {
    return this.adminService.findAll();
  }

  @Query(()=>Admin)
  findOneAdmin(@Args('id') id: number) {
    return this.adminService.findOne(+id);
  }

  @Mutation(()=>Admin)
  updateAdmin(@Args('id',{type:()=>ID}) id: number, @Args("updateAdmin") updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Mutation(()=>Number)
  remove(@Args('id') id:number) {
    return this.adminService.remove(+id);
  }
}
