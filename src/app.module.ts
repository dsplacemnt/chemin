import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FinanceModule } from './modules/finance/finance.module';
import { CoreModule } from './modules/core/core.module';
import { OrganizationModule } from './modules/core/organization/organization.module';
import { UserModule } from './modules/core/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FinanceModule,
    CoreModule,
    OrganizationModule,
    UserModule,
    AuthModule,
    PassportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('movement');
  }
}
