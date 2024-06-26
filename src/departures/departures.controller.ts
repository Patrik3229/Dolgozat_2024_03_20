import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { DeparturesService } from './departures.service';
import { CreateDepartureDto } from './dto/create-departure.dto';
import { UpdateDepartureDto } from './dto/update-departure.dto';
import { departures } from '@prisma/client';

@Controller('departures')
export class DeparturesController {
  constructor(private readonly departuresService: DeparturesService) {}

  @Post('addDeparture')
  create(@Body() createDepartureDto: CreateDepartureDto) {
    return this.departuresService.create(createDepartureDto);
  }

  @Get()
  findAll() {
    return this.departuresService.findAll();
  }

  @Get('stop/:id')
  findByStops(@Param('id') id: string) {
    return this.departuresService.findByStops(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartureDto: UpdateDepartureDto) {
    return this.departuresService.update(+id, updateDepartureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departuresService.remove(+id);
  }
}
