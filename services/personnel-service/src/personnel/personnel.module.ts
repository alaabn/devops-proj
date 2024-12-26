import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonnelController } from './personnel.controller';
import { PersonnelService } from './personnel.service';
import { Personnel, PersonnelSchema } from './schema/personnel.schema';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([{ name: Personnel.name, schema: PersonnelSchema }])
  ],
  controllers: [PersonnelController],
  providers: [PersonnelService],
})
export class PersonnelModule { }
