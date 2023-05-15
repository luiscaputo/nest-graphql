import { UserObject } from 'src/graphql/schema/user.schema';
import { ICreateOneUser } from '../types';

export class CreateUserUseCase {
  async execute(props: ICreateOneUser): Promise<UserObject> {
    const user: any = [];

    user.push({
      name: props.name,
      email: props.email,
    });

    return user;
  }
}
