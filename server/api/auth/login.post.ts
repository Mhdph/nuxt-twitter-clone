import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { userTransformer } from "../transformers/user";
import { createRefrehToken } from "~~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "ّInvalid params",
      })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "username or password is wrong",
      })
    );
  }
  const thePassMatch = await bcrypt.compare(password, user.password);

  if (!thePassMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "username or password is wrong",
      })
    );
  }

  const { accessToken, refreshToken } = generateTokens(user);

  await createRefrehToken({
    token: refreshToken,
    userId: user.id,
  });

  sendRefreshToken(event, refreshToken);

  return {
    user: userTransformer(user),
    accessToken,
  };
});
