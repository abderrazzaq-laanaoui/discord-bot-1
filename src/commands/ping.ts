import { ICommand } from "wokcommands";

export default {
    category:"testing",
    description:"replies with pong",
    slash:true,
    testOnly:true,
    
    callback:(obj)=>{
        console.log(obj)
        
        obj.message.reply({content:'Poong!'});
    }
    
} as ICommand;