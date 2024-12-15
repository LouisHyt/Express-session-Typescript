import env from '@root/env'
import { createPool } from 'mysql2/promise'

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = env


export const database = createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_NAME
})