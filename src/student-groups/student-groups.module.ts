import { Module } from '@nestjs/common';
import { StudentGroupsService } from './student-groups.service';
import { StudentGroupsController } from './student-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGroup } from './entities/student-group.entity';
import { Student } from '../students/entities/student.entity';
import { StudentsModule } from '../students/students.module';
import { GroupModule } from '../group/group.module';
import { Group } from '../group/entities/group.entity';
import { StudentGroupsResolver } from './student-groups.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([
    StudentGroup,Student,Group
  ]),StudentsModule,GroupModule],
  controllers: [StudentGroupsController],
  providers: [StudentGroupsService,StudentGroupsResolver],
})
export class StudentGroupsModule {}
