import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserObject, createOneUserArgs } from '../schema/user.schema';
import { CreateUserUseCase } from 'src/app/use-cases/create-user.usecase';
import { ICreateOneUser } from 'src/app/types/index';

@Resolver()
export class UserResolver {
  @Query(() => String)
  Users() {
    return 'Hello World';
  }

  @Mutation(() => UserObject)
  async createOneUser(@Args() args: createOneUserArgs) {
    const useCase = new CreateUserUseCase();
    const user = await useCase.execute({
      email: args.data.email,
      name: args.data.name,
    });
    return args.data;
  }
}
