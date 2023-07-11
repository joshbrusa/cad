import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

export default () => {
  if (process.env.NODE_ENV !== "production") {
    return new PrismaClient();
  }

  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
};
