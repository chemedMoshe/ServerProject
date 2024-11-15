import { Socket } from "socket.io";
import { io } from "../app";
import { getTimeMissiesByName } from "../utils/missiles";
import { missilesEunm } from "../Models/enums/MissilesEnum";

export const startConnection = (socket: Socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('Bye bye user');
    })

    socket.on('dispatch', (data:{location:string,name:missilesEunm}) => {
       
        let time = getTimeMissiesByName(data.name)
        let id = setInterval(() => {
            console.log(time?.toLocaleString());
            if( time! < 0){
            clearInterval(id)
           
        return}
            socket.broadcast.emit('alarm',{data,time});
            time!-=0.1
        },1000);
        socket.emit('end')
    })
}
