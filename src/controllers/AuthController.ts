import AuthModel from '@models/AuthModel';
import type { Request, Response } from 'express';
import { ZodError } from 'zod';

function showLoginPage(req: Request, res: Response){
    res.render('auth/login', {
        title: "Login Page",
        metadesc: "Login Page of the website"
    });
}

function showRegisterPage(req: Request, res: Response){
    res.render('auth/register', {
        title: "Register Page",
        metadesc: "Register Page of the website",
    });
}

function handleLogin(req: Request, res: Response){
    res.status(200).send("ok");
}

function handleRegister(req: Request, res: Response){
    try {
        const result = AuthModel.registerUser(req.body);
    } catch (error) {
        if(error instanceof ZodError){
            for(const err of error.issues){
                req.flash("error", err.message)
            }
        } else {
            console.log(error);
            req.flash("error", "Sorry something went wrong. Please contact the administrator")
        }
        res.redirect("/auth/register");
        return;
    }
    res.redirect('/auth/login');
}

function handleLogout(req: Request, res: Response){
    if(!req.user){
        res.sendStatus(401);
        return;
    }

    req.logout((err) => {
        if(err){
            res.sendStatus(400);
            return;
        };
        req.session.destroy((err) => {
            if(err){
                res.sendStatus(400);
                return;
            }
            res.sendStatus(200);
        });
    })
}

export default {
    showLoginPage,
    showRegisterPage,
    handleLogin,
    handleRegister,
    handleLogout
}