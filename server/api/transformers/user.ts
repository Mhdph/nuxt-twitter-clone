import { userDataSchema } from "~~/server/db/users";

export const userTransformer = (user: userDataSchema) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    usename: user.username,
    profileImage: user.profileImage,
  };
};
