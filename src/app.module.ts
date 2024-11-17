import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { DevicesModule } from './devices/devices.module';
// import { DevicesController } from './devices/devices.controller';
// import { DevicesService } from './devices/devices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.5ga97zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    DevicesModule,
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
