import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { LoginDto } from './dto/login.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { PersonnelActions } from './enums/messages-patterns.enum';
import { AuthGuard } from './guards/auth.guard';

@Controller('personnel')
export class CustomerController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    @Post()
    async loginPersonnel(@Body() data: LoginDto) {
        return await lastValueFrom(this.natsClient.send(PersonnelActions.LoginPersonnel, data))
            .catch((e) => e.message);
    }

    @UseGuards(AuthGuard)
    @Post()
    createPersonnel(@Body() data: CreatePersonnelDto) {
        this.natsClient.send(PersonnelActions.CreatePersonnel, data);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAllPersonnel() {
        this.natsClient.send(PersonnelActions.FindAllPersonnel, {});
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOnePersonnel(@Param() id: string) {
        this.natsClient.send(PersonnelActions.FindOnePersonnel, id);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    updatePersonnel(@Body() data: UpdatePersonnelDto) {
        this.natsClient.send(PersonnelActions.UpdatePersonnel, data);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    deletePersonnel(@Param() id: string) {
        this.natsClient.send(PersonnelActions.DeletePersonnel, id);
    }
}
