import { User } from "../model/User";

export const findUserByEmail = (email: string) => User.findOne({ email });

export const createUser = (data: {
  name: string;
  email: string;
  password: string;
}) => User.create(data);
