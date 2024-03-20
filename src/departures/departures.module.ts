import { Module } from '@nestjs/common';
import { DeparturesService } from './departures.service';
import { DeparturesController } from './departures.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DeparturesController],
  providers: [DeparturesService, PrismaService],
})
export class DeparturesModule {}
