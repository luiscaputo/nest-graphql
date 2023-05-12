import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UserResolver {
    @Query(() => String)
    Users(){
        return 'Hello World';
    }

    @Mutation()
    createOneUser(@Args args){
        return 'User Created'
    }
}