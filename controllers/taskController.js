/*
    taskController.js

    REST API controller for /tasks
*/
'use strict';

var express = require('express');
var _db;

function getAllTasks(req, res, next) {
    _db.all('select rowid, title, done from Tasks where done=0', function(err, rows){
       if (err) {
           return next(err);
       }
        res.json(rows);
    });
}

module.exports.Router = function(db) {
    //hold on to database reference
    _db = db;

    //create a router for our routes
    var router = express.Router();

    //add routes for:

    //GET /tasks (gets all undone tasks)
    //POST /tasks (inserts new task)
    router.get('/tasks', getAllTasks);
    //GET /tasks/:id (gets a particular task)
    //PUT /tasks/:id (updates a particular task)
    //DELETE /tasks/:id (deletes a particular task)

    return router;
};