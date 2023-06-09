import jwt from "jsonwebtoken";
import { User } from "~~/types";

const generateAccessTokens = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "4h",
  });
};

const generateRefreshTokens = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "10m",
  });
};

export const generateTokens = (user: User) => {
  const accessToken = generateAccessTokens(user);
  const refreshToken = generateRefreshTokens(user);

  return {
    accessToken,
    refreshToken,
  };
};

export const sendRefreshToken = (event, token) => {
  setCookie(event.res, "refreshToken", token, {
    httpOnly: true,
    sameSite: true,
  });
};
