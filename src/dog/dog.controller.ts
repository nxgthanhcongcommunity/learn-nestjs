import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller({
  //  host: 'example.com',
  path: 'dogs',
})
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('test1')
  test1(@Param() params: any, @Res() res: Response) {
    // return `This action returns a #${params.id} cat`;
    res.status(500).json({ message: 'Internal Server Error' });
  }

  @Get('test2/:id1')
  test2(@Param('id1') id123: string): string {
    console.log(id123);
    return `This action returns a #${id123} cat`;
  }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get('')
  @HttpCode(500)
  @Header('Cache-Control', 'no-store')
  findAll(@Req() request: Request) {
    console.log(request);
    return this.dogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
  }
}
