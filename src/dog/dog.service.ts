import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogService {
  create(createDogDto: CreateDogDto) {
    console.log(createDogDto);
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    console.log(id, updateDogDto);
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
