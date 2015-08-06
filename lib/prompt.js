"use strict";
var inq = require("inquirer");
var Promise = require("promise");

var select = function(files){
    var choices = [];
    files.forEach(function(file){
        choices.push({
            name: file,
            checked: true
        });
    });
    var questions = [{
        type: "checkbox",
        name: "files",
        message: "Please select which files you would like to revert: ",
        choices: choices
    }];
    return new Promise(function(resolve){
        inq.prompt(questions, function(answers){
            resolve(answers.files);
        });
    });
};

module.exports = {
    select: select    
};
