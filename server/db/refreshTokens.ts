import { prisma } from ".";

export const createRefrehToken = (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};
