/*
    taskController.js

    REST API controller for /tasks
*/
'use strict';

var express = require('express');
var _db;



module.exports.Router = function(db) {
    //hold on to database reference
    _db = db;

    //create a router for our routes
    var router = express.Router();

    //add routes for:

    //GET /tasks (gets all undone tasks)
    //POST /tasks (inserts new task)

    //GET /tasks/:id (gets a particular task)
    //PUT /tasks/:id (updates a particular task)
    //DELETE /tasks/:id (deletes a particular task)

    return router;
};