import { Field, InputType } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class NewHeroInput {
  
  @Field(type => Number )
  id: number;

  @Field(type => String)
  name: string;


}