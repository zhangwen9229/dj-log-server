// {app_root}/app/io/middleware/connection.js
module.exports = app => {

    console.log(app);
    return async (ctx, next) => {
        console.log('----------');
        console.log(ctx.socket.id);
        // setTimeout(() => {
        // setTimeout(() => {
        await ctx.socket.emit('res', 'test');
        ctx.socket.emit('res', 'connected!');
        // }, 0);

        // }, 200);

        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };
};
