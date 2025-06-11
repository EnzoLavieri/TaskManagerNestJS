import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async create(task: Partial<Task>): Promise<Task> {
        const createdTask = new this.taskModel(task);
        return createdTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id).exec();
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    async update(id: string, data: Partial<Task>): Promise<Task> {
        const task = await this.taskModel.findByIdAndUpdate(id, data, { new: true });   
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }        
        return task;
    }

    async delete(id: string): Promise<void> {
        const task = await this.taskModel.findByIdAndDelete(id).exec();
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
    }
}
