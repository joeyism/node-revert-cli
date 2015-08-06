#!/usr/bin/env node
var git = require("git-lib");
var prompt = require("./lib/prompt");
require("colors");
var filesToRevert;

git.isGit().then(function(){

    return git.showFilesModified();

}).then(function(files){

    return prompt.select(files);

}).then(function(files){

    filesToRevert = files;
    return git.revert(files);

}).then(function(){

    console.log("The following files has been successfully reverted: ");

    filesToRevert.forEach(function(file){
        console.log("  - ".yellow + file.green);
    });

}).catch(function(err){

    console.log("Reversal failed!".red);
    console.log(err.red);

});




