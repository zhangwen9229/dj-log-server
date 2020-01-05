import { Controller } from 'egg';
import { LOG_ROOM } from '../../db/datas';

export default class LogController extends Controller {
    public async index() {
        const { ctx } = this;
        console.log(ctx.request.body);
        ctx.body = await ctx.service.test.sayHi('egg');

        const nsp = this.app.io.of('/');
        console.log(nsp);
        (nsp as any).to(LOG_ROOM).emit('res', {
          action: 'join',
          target: 'participator',
          message: `User joined.`,
        });
    }

    async create() {
        const ctx = this.ctx;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);

        console.log(ctx.request.body);

        // 调用 service 创建一个 topic
        const id = await ctx.service.api.log.create(ctx.request.body);
        // 设置响应体和状态码
        ctx.body = {
          topic_id: id,
        };
        ctx.status = 200;
      }
}
