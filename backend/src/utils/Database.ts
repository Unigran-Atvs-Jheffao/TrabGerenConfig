import Database from "better-sqlite3";

const db = new Database("served.db");

export const DB = {
    getInstance: () => {
        return db;
    },
    prepare: (sql: string) => {
        return DB.getInstance().prepare(sql);
    }
}