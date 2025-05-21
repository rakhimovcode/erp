import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, isPhoneNumber, IsString } from "class-validator";

export enum Role {
  TEACHER = "teacher",
  ASSISTANT = "assistant",
}
export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber("UZ")
  phone: string;
  @IsNotEmpty()
  @IsString()
  subject: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  confirm_password: string;
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
