hello(goodBye)



function hello (cb){
    console.log("hello")
    cb();
}

function goodBye (){
    console.log('good bye');
}