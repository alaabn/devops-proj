import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePartDto } from './dto/create-part.dto';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PartActions, ToolActions } from './enums/messages-patterns.enum';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('inventory')
export class InventoryController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    // Part - inventory
    @Post('part')
    createPart(@Body() data: CreatePartDto) {
        this.natsClient.send(PartActions.CreatePart, data);
    }

    @Get('part')
    findAllPart() {
        this.natsClient.send(PartActions.FindAllPart, {});
    }

    @Get('part/:id')
    findOnePart(@Param() id: string) {
        this.natsClient.send(PartActions.FindOnePart, id);
    }

    @Patch('part/:id')
    updatePart(@Body() data: UpdatePartDto) {
        this.natsClient.send(PartActions.UpdatePart, data);
    }

    @Delete('part/:id')
    deletePart(@Param() id: string) {
        this.natsClient.send(PartActions.DeletePart, id);
    }

    // Tool - inventory
    @Post('tool')
    createTool(@Body() data: CreateToolDto) {
        this.natsClient.send(ToolActions.CreateTool, data);
    }

    @Get('tool')
    findAllTools() {
        this.natsClient.send(ToolActions.FindAllTool, {});
    }

    @Get('tool/:id')
    findOneTool(@Param() id: string) {
        this.natsClient.send(ToolActions.FindOneTool, id);
    }

    @Patch('tool/:id')
    updateTool(@Body() data: UpdateToolDto) {
        this.natsClient.send(ToolActions.UpdateTool, data);
    }

    @Delete('tool/:id')
    deleteTool(@Param() id: string) {
        this.natsClient.send(ToolActions.DeleteTool, id);
    }
}
