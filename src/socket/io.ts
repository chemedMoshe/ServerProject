import { Socket } from "socket.io";

export const startConnection = (socket: Socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('Bye bye user');
    })
}