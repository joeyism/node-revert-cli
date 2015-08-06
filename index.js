#!/usr/bin/env node
var git = require("git-lib");
require("colors");

git.isGit().then(function(){

    return git.showFilesModified();

}).then(function(files){

    return prompt.select(files);

}).then(function(files){

    return git.revert(files);

}).catch(function(err){

    console.log(err.red());

});




