import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    async create(@Body() task: Partial<Task>): Promise<Task> {
        return this.tasksService.create(task);
    }

    @Get()
    async findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<Task>): Promise<Task> {
        return this.tasksService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.tasksService.delete(id);
    }
}
