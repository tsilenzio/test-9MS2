'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.on('/').render('welcome');

Route.get('/patient', 'PatientController.getIndex');
Route.post('/patient', 'PatientController.postIndex');

Route.get('/physician', 'PhysicianController.getIndex');
