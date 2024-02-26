import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('demo')
export class DemoController {

    @Get()
    getDemo(): string {
        return 'Hello World! GET';
    }

    @Post()
    createDemo(): string {
        return 'Hello World! POST';
    }

    @Put()
    updateDemo(): string {
        return 'Hello World! PUT';
    }

    @Delete()
    deleteDemo(): string {
        return 'Hello World! DELETE';
    }

}
