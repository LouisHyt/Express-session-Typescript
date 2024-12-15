import passport from "passport";
import { Strategy } from "passport-local";
import { database } from "@utils/db";
import type { FieldPacket, RowDataPacket } from "mysql2";

interface IUser extends RowDataPacket {
    id: number,
    username: string,
    password: string,
    isBanned: boolean,
    email: string
}

passport.serializeUser((user: Express.User, done) => {
    done(false, user.id);
})

passport.deserializeUser(async (id: number, done) => {
    try {
        let sql = `
            SELECT id, username, email, isBanned
            FROM user
            WHERE id = ?     
        `;
        let [ rows ]: [IUser[], FieldPacket[]] = await database.query<IUser[]>(sql, [id]);
        if(!rows.length){
            throw new Error("User not found");
        }
        done(false, {
            username: rows[0].username,
            email: rows[0].email,
            id: rows[0].id
        });
    } catch (error) {
        done(error, false);
    }
})

export default new Strategy(async (username, password, done) => {
    try {
        let sql = `
            SELECT id, username, email, password, isBanned
            FROM user
            WHERE username= ?     
        `;
        let [ rows ]: [IUser[], FieldPacket[]] = await database.query<IUser[]>(sql, [username]);
        if(!rows.length || password !== rows?.[0].password){
            throw new Error("Invalid Credentials");
        }
        if(rows[0].isBanned){
            throw new Error("You have been banned from this website");
        }
        done(false, {
            username: rows[0].username,
            email: rows[0].email,
            id: rows[0].id
        });
    } catch (error) {
        done(error, false);
    }
})