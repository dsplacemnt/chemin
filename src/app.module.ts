import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FinanceModule } from './modules/finance/finance.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { EntitiesModule } from './modules/core/entity/entity.module';

@Module({
  imports: [ConfigModule.forRoot(), FinanceModule, EntitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('movement');
  }
}
