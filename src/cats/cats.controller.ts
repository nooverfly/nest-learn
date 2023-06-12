import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return {
      success: true,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<any> {
    const cats = await this.catsService.findAll();
    return {
      success: true,
      cats: cats,
    };
  }

  // @Post()
  // create(@Body() createCatDto: CreateCatDto): string {
  //   return 'This action adds a new cat';
  // }

  // @Get()
  // findAll(@Query() query: ListAllEntities): string {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }

  // @Post('test')
  // create2(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send({ success: true });
  // }

  // @Get('test/test')
  // find2(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json({
  //     success: true,
  //     result: [],
  //   });
  // }
}
