import { Injectable } from '@nestjs/common';
import { CreateDepartureDto } from './dto/create-departure.dto';
import { UpdateDepartureDto } from './dto/update-departure.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeparturesService {

  constructor(private readonly db: PrismaService) {}

  create(createDepartureDto: CreateDepartureDto) {
    return this.db.departures.create({
      data: {
        stop_id: createDepartureDto.stop_id,
        departureTime: createDepartureDto.departureTime
      }
    });
  }

  findAll() {
    return;
  }

  findByStops(id: number) {
    return this.db.departures.findMany({
      where: { stop_id: id }
    })
  }

  findOne(id: number) {
    return this.db.departures.findUnique({
      where: { id }
    })
  }

  update(id: number, updateDepartureDto: UpdateDepartureDto) {
    return `This action updates a #${id} departure`;
  }

  remove(id: number) {
    return `This action removes a #${id} departure`;
  }
}
