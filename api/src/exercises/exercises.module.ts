import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '64540054d3mshd0d575529a3ee04p1dcd48jsn4a88be98b18e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    }),
  ],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
