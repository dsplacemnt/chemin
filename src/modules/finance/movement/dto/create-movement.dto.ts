import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  value: number;

  @ApiProperty()
  @IsNumber()
  financialCategoryId: number;

  @ApiProperty()
  @IsNumber()
  accountId: number;

  @ApiProperty()
  @IsDate()
  dateMaturity: Date;

  @ApiProperty()
  @IsDate()
  dateCompetency: Date;

  @ApiProperty()
  @IsDate()
  datePayment: Date;

  @ApiProperty()
  @IsString()
  paymentMethods: string;

  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNumber()
  procedureId: number;

  @ApiProperty()
  @IsNumber()
  contactId: number;

  @ApiProperty()
  @IsNumber()
  entityId: number;

  @ApiProperty()
  @IsString()
  additional: string;

  @ApiProperty()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsNumber()
  creditType: number;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;

  @ApiProperty()
  @IsNumber()
  appointmentId: number;

  @ApiProperty()
  @IsString()
  information: string;

  @ApiProperty()
  @IsNumber()
  agreementId: number;

  @ApiProperty()
  @IsNumber()
  owner: number;

  @ApiProperty()
  @IsNumber()
  movementId: number;

  @ApiProperty()
  @IsNumber()
  fileId: number;

  @ApiProperty()
  @IsNumber()
  costCenterId: number;

  @ApiProperty()
  @IsDate()
  deletedAt: Date;

  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsString()
  appointmentPackageToken: string;

  @ApiProperty()
  @IsString()
  recurrenceEntryToken: string;

  @ApiProperty()
  @IsString()
  recurrenceToken: string;

  @ApiProperty()
  @IsNumber()
  recurrenceType: number;

  @ApiProperty()
  @IsNumber()
  nfeGenerated: number;

  @ApiProperty()
  @IsNumber()
  taxMovementId: number;

  @ApiProperty()
  @IsNumber()
  paymentMethodId: number;

  @ApiProperty()
  @IsNumber()
  taxType: number;

  @ApiProperty()
  @IsNumber()
  taxValue: number;

  @ApiProperty()
  @IsNumber()
  totalTaxes: number;

  @ApiProperty()
  @IsNumber()
  partialPayment: number;

  @ApiProperty()
  @IsString()
  groupToken: string;

  @ApiProperty()
  @IsString()
  packageRenewalToken: string;

  @ApiProperty()
  @IsDate()
  startPeriodRenewal: Date;
}
