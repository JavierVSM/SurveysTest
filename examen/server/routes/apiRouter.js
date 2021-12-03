const express = require( 'express' );
const {APIController} = require( './../controllers/apiController' );
const APIRouter = express.Router();

APIRouter
    .post( '/users/login', APIController.userLogin );

APIRouter
    .get( '/users/logout', APIController.userLogout );

APIRouter
    .get( '/users/validate', APIController.validateUser );

APIRouter
    .post( '/users/new', APIController.addNewUser );

APIRouter
    .get( '/users/all', APIController.getAllUsers );

APIRouter
    .get( '/surveys/all', APIController.getAllSurveys );

APIRouter
    .post( '/surveys/new', APIController.addNewSurvey );

APIRouter
    .post( '/survey/delete', APIController.deleteSurvey );    
 


/*
APIRouter
    .put( '/option/update/:id', APIController.updateOption );
*/

module.exports = { APIRouter };