import { IsString } from 'class-validator';

export class createPaymentOptionDto {
  @IsString()
  readonly name: string;
}
