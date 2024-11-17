import { Module, ValidationPipe } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { DevicesModule } from './devices/devices.module';
// import { DevicesController } from './devices/devices.controller';
// import { DevicesService } from './devices/devices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesModule } from './devices/devices.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.5ga97zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    DevicesModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       playground: false,
//     }),
//     GraphQLModule.forRoot({
//       include: [DevicesModule],
//     }),
//   ],
// })
export class AppModule {}
