import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { DeparturesModule } from './departures/departures.module';

@Module({
  imports: [DeparturesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
