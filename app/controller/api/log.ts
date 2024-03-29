import { Controller } from 'egg';
import { ALL_SocketIDs, LOG_ROOM } from '../../db/datas';
import * as dayjs from 'dayjs';
import { processMtaLog } from '../business/Mta';

export default class LogController extends Controller {
  public async index() {
    const { ctx } = this;
    // const nsp = this.app.io.of('/');
    // console.log(ctx.request.body);
    ctx.body = await ctx.service.test.sayHi(`走错地方了~~~ ！`);

  }

  async create() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    // ctx.validate(createRule, ctx.request.body);

    // 调用 service 创建一个 topic
    const id = await ctx.service.api.log.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 200;

    const nsp = this.app.io.of('/');

    // (nsp as any).to(LOG_ROOM).emit('res', {
    //   action: 'join',
    //   target: 'participator',
    //   message: `User joined.`,
    // });
    const msg = {
      ...ctx.request.body,
      errorTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      clientIps: ctx.ips.length === 0 ? [ ctx.ip ] : ctx.ips
    };

    if(ctx.request.body.extra?.djType === 'mta') {
      processMtaLog(nsp, ctx.request.body)
      return
    }
    const strMsg = ctx.request.body.msg;
    if(typeof strMsg  === 'string') {
      if(strMsg.startsWith('Possible Unhandled Promise Rejection') && strMsg.length < 48){
        return;
      }
    }

    console.log('---------- ctx.ips - - -- - - - -- ');
    console.log(msg);
    console.log(ctx.ip);
    console.log(ctx.ips);
    console.log(ALL_SocketIDs.size);
    (nsp as any).to(LOG_ROOM).emit('log', msg);
  }
}
