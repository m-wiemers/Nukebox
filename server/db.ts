import fs from "fs/promises";
import { APISong } from "../utils/api";

type DB = {
  songs: APISong[];
};

const DB_PATH = "./server/db.json";

export async function readDb(): Promise<DB> {
  const dbJSON = await fs.readFile(DB_PATH, "utf-8");
  const db: DB = JSON.parse(dbJSON);
  return db;
}

export async function writeDb(db: DB) {
  console.log(db);
  const dbJSON = JSON.stringify(db, null, 2);
  await fs.writeFile(DB_PATH, dbJSON);
}
