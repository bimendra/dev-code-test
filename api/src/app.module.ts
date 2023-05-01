import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ExercisesModule } from './exercises/exercises.module';
@Module({
  imports: [PrismaModule, AuthModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
