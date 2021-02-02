import { ALL_SocketIDs, LOG_ROOM } from '../../db/datas';

// {app_root}/app/io/middleware/connection.js

module.exports = _app => {
    return async (ctx, next) => {
        console.log('----------');
        console.log(ctx.socket.id);
        // setTimeout(() => {
        // setTimeout(() => {
        // await ctx.socket.emit('res', 'test');
        ctx.socket.emit('connected', 'connected!');
        // }, 0);

        // }, 200);
        ALL_SocketIDs.set(ctx.socket.id, { roomName: LOG_ROOM });
        
        await ctx.socket.emit('changePersonSize', ALL_SocketIDs.size);

        ctx.socket.join(LOG_ROOM);

        await next();

        console.log('disconnection 离开了')
        ALL_SocketIDs.delete(ctx.socket.id);
        ctx.socket.emit('changePersonSize', ALL_SocketIDs.size)
        // execute when disconnect.
        console.log('disconnection!');
    };
};
