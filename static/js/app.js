/*
    app.js
    code for our demo application
 */

"use strict";

var tasksUrl = '/api/tasks';

angular.module('ToDoApp', [])
    .controller('TasksController', function($scope, $http) {
        $scope.refreshTasks = function() {
            $scope.loading = true;
            $http.get(tasksUrl)
                .success(function(data) {
                    $scope.tasks = data;
                    $scope.errorMessage = null;
                })
                .error(function(err) {
                    console.log(err);
                    $scope.errorMessage = err.message;
                })
                .finally(function() {
                    $scope.loading = false;
                });
        };

        $scope.refreshTasks();

        $scope.newTask = {done: false};

        $scope.addTask = function(task) {
            //post it
            $scope.inserting = true;
            $http.post(tasksUrl, task)
                .success(function(data) {
                    $scope.newTask.rowid = data.rowid
                    $scope.tasks.push($scope.newTask);
                    $scope.newTask = {done: false};
                    $scope.errorMessage = null;
                })
                .error(function(err) {
                    console.log(err);
                    $scope.errorMessage = err.message;
                })
                .finally(function() {
                    $scope.inserting = false;
                });
        };

        $scope.updateTask = function(task) {
            $scope.updating = true;
            $http.put(tasksUrl + '/' + task.rowid, task)
                .success(function() {
                    $scope.errorMessage = null;
                })
                .error(function(err) {
                    console.log(err);
                    $scope.errorMessage = err;
                })
                .finally(function() {
                    $scope.updating = false;
                });
        };
    });
