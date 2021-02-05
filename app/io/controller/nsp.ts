
import { Controller } from 'egg';
declare module 'egg' {
    interface CustomController {
        nsp: NspController;
    }
}


class NspController extends Controller {
    async exchange() {
        const { ctx, app } = this;
        // const nsp = app.io.of('/');
        const message = ctx.args[0] || {};
        const socket = ctx.socket;
        const client = socket.id;

        try {
            const { payload } = message;
            // if (!target) return;
            const msg = ctx.helper.parseMsg('dosomething-you-deel', payload, { });

            // this.ctx.socket.emit(target, msg);
            await ctx.socket.emit(client, msg);
        } catch (error) {
            app.logger.error(error);
        }
    }
}

module.exports = NspController;
