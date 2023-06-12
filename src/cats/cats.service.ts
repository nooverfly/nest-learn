import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: '1月',
      age: 18,
      breed: 'cat',
    },
    {
      name: '2月',
      age: 28,
      breed: 'cat',
    },
    {
      name: '3月',
      age: 38,
      breed: 'cat',
    },
    {
      name: '4月',
      age: 48,
      breed: 'cat',
    },
    {
      name: '4月',
      age: 28,
      breed: 'cat',
    },
    {
      name: '5月',
      age: 17,
      breed: 'cat',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
