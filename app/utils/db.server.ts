import { PrismaClient } from "@prisma/client";

let db: PrismaClient

declare global {
	let __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
	db = new PrismaClient();
	db.$connect().then(() => {});
} else {
	if (!global.__db) {
		global.__db = new PrismaClient();
		global.__db.$connect().then(() => {});
	}

	db = global.__db;
}

export { db };