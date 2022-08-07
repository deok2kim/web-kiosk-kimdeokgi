import { IsString } from 'class-validator';

export class CreatePaymentOptionDto {
  @IsString()
  readonly name: string;
}
