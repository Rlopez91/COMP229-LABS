import express from 'express';

import User from '../Models/user';
import passport from 'passport';
import { request } from 'http';

//display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName:''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName:''});
}

//processing functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{

}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{

}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    
}

/*TEMPORARY SECTION */