const { returns } = require("chai-spies")

function receivesAFunction (callback){
    return callback()
}

function returnsANamedFunction(){
    return function named(){

    }
}

function returnsAnAnonymousFunction (){
    return function(){
        
    }
}

 