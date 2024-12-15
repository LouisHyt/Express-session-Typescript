import { Express } from "express";

declare global {
    namespace Express {
      interface User {
        username: string;
        id: number;
        email: string;
      }
    }
}