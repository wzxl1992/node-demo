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
function insertTask(req, res, next) {
    if (!rep.body.title || 0 == req.body.trim().length)
    _db.run('insert in Tasks (tile, done) values(?,0)', req.body.title. function(err){
        if (err) {
            return next(err);
        }
        res.json({rowid:this.lastID});

    });

}



function updateTask(req, res, next) {
    _db.run('update Task set done=? where rowid=?', req.body.done., req.params.id, function(err){
       if (err) {
           return next(err);
       }

        res.json({rowsAffected:this.change)})
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
    router.get('/tasks', insertTask);
    router.put('/tasks/:id', updateTask);
    //GET /tasks/:id (gets a particular task)
    //PUT /tasks/:id (updates a particular task)
    //DELETE /tasks/:id (deletes a particular task)

    return router;
};