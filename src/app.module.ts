import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { FinanceModule } from './modules/finance/finance.module';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [ConfigModule.forRoot(), FinanceModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('movement');
  }
}
