import express from 'express';

import User from '../Models/user';
import passport from 'passport';
import { request } from 'http';
import { UserDisplayName } from '../Util';

//display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName:UserDisplayName(req)});
}

//processing functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    passport.authenticate('local', function(err, user, info){
        //are there server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        //no problems
        req.logIn(user, function(err){
            // are there db error?
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/movie-list');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    //instantiate a new user object
    let newUser = new User({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password,function(err){
        if(err){
            if(err.name == "UserExistsError"){
                console.error('Error: User already exists');
                req.flash('registerMessage', 'Registration Error');
            }
            else{
                console.error(err.name);
            req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/register');
        }

        //no errors
        //login the user
        return passport.authenticate('local')(req, res, function(){
            return res.redirect('movie-list');
        });
    });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log("user logged out");
    });
    res.redirect('/login');
}

/*TEMPORARY SECTION */