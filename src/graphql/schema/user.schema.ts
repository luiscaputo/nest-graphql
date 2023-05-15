import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserObject {
  @Field()
  name: string;
  @Field()
  email: string;
}

@InputType()
export class CreateOneUserInput {
  @Field()
  name: string;
  @Field()
  email: string;
}

@ArgsType()
export class createOneUserArgs {
  @Field()
  data: CreateOneUserInput;
}
