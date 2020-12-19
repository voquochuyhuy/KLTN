import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import postsRouter from './routes/posts';
import authRouter from './routes/auth';
import logRouter from './routes/log';
import userAdminRouter from './routes/user-admin';
import bodyParser from 'body-parser';
import cors from 'cors';

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/log', logRouter);
app.use('/user-admin', userAdminRouter);

export default app;
