import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigs } from './config/typeorm.config';
import { HashProvider } from 'src/common/providers/hashProviders/HashProvider';
import { HashProviderProps } from 'src/common/providers/hashProviders/HashProviderProps';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),
    TypeOrmModule.forFeature([
      // insert entities here
    ]),
  ],
  providers: [
    // Provide: repositoryProps
    // useClass: repository
    // {
    //     provide: entitiyRepositoryProps,
    //     useClass: TypeormRepository
    // }
    {
      provide: HashProviderProps,
      useClass: HashProvider,
    },
  ],
  exports: [
    // Here insert the repositoryProps
  ],
})
export class DataBaseModule {}
