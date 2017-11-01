module.exports = class Logger{
    constructor(){

    }
    log(...infoArr){
        for(let variable of infoArr){
            console.log(variable);
        }
    }
}
