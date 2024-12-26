import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { compare } from 'bcryptjs';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { LoginDto } from './dto/login.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { PersonnelActions } from './enum/message-patterns.enum';
import { PersonnelService } from './personnel.service';

@Controller()
export class PersonnelController {
  constructor(
    private readonly personnelService: PersonnelService,
    private jwtService: JwtService
  ) { }

  @MessagePattern(PersonnelActions.LoginPersonnel)
  async login(@Payload() { email, password }: LoginDto) {
    const [personnel] = await this.personnelService.findPersonnelByEmail(email);
    if (!personnel) return 'NOT_FOUND';

    const check = compare(password, personnel.password);
    if (!check) return 'CHECK_CREDENTIALS';

    const accessToken = await this.jwtService.signAsync({
      sub: personnel._id,
      username: personnel.name,
      roles: personnel.specialization
    });

    return { personnel, accessToken };
  }

  @MessagePattern(PersonnelActions.CreatePersonnel)
  async create(@Payload() data: CreatePersonnelDto) {
    return await this.personnelService.createPersonnel(data);
  }

  @MessagePattern(PersonnelActions.FindAllPersonnel)
  async findAll() {
    return await this.personnelService.findAllPersonnel();
  }

  @MessagePattern(PersonnelActions.FindOnePersonnel)
  async findOne(@Payload() id: string) {
    return await this.personnelService.findOnePersonnel(id);
  }

  @MessagePattern(PersonnelActions.UpdatePersonnel)
  async update(@Payload() data: UpdatePersonnelDto) {
    return await this.personnelService.updatePersonnel(data.id, data);
  }

  @MessagePattern(PersonnelActions.DeletePersonnel)
  async delete(@Payload() id: string) {
    return await this.personnelService.deletePersonnel(id);
  }
}
