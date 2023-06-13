import { ArgsType, Field, Int } from '@nestjs/graphql';


@ArgsType()
export class HeroesArgs {
  @Field(type => String)
  name: string;
  

  @Field(type => Number)
  id: Number;
}