import { prisma } from ".";
import bcrypt from "bcrypt";

export interface userDataSchema {
  id?: string;
  email: string;
  name?: string;
  username: string;
  password: string;
  profileImage: string;
  createdAt?: Date;
  updateAt?: Date;
}

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
