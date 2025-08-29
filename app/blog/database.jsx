import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';

export const database = async () => {
    const db = await open({
        filename: './app/blog/database.sqlite',
        driver: sqlite3.Database
    });

    await db.exec('PRAGMA journal_mode=WAL;');

    await db.exec(fs.readFileSync('./app/blog/schema.sql', 'utf8'));

    return db;
};
