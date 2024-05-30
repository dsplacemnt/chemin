import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { FinanceModule } from './modules/finance/finance.module';
import { CoreModule } from './modules/core/core.module';
import { OrganizationModule } from './modules/core/organization/organization.module';
import { UserModule } from './modules/core/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), FinanceModule, CoreModule, OrganizationModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('movement');
  }
}
