import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import expressMySQL from 'express-mysql-session';
import path from 'node:path';
import passport from 'passport';
import env from '@root/env';
import helmet from 'helmet';
import flash from 'connect-flash'
import { database } from './utils/db';
import authRoute from './routes/authRoute'
import localStrategy from './config/strategies/local-strategy';


// Problèmes de types session & database. En important avec as any ou avec require le problème disparait mais en utilisant les import ES6 le probleme reste
const MySQLStore = expressMySQL(session as any);
const expirationTime = 1 * 60 * 60 * 1000; //1 Heure
const storeOptions = {
    clearExpired: true,
    expiration: expirationTime
}


const sessionStore = new MySQLStore(storeOptions, database as any);

const { PORT, SESSION_SECRET } = env;

const app = express();

//Server configuration
passport.use(localStrategy)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(helmet());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: expirationTime, // 1 hour
        secure: process.env.NODE_ENV === 'production'
    },
    unset: "destroy"
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(function (req, res, next){
    res.locals.flashMessages = req.flash();
    next();
})

//Server routes
app.use('/auth', authRoute);

app.get("/", (req, res) => {
    res.render('index', {
        title: "Home Page",
        metadesc: "Home Page of the website"
    });
})

app.get("/auth/status", (req, res) => {
    if(req.user){
        res.status(200).send(req.user)
    } else {
        res.sendStatus(401)
    }
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))