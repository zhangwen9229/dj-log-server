import { Controller } from 'egg';
import { ALL_SocketIDs } from '../db/datas';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi(`走错地方了~~~ ！${ALL_SocketIDs.size}`);
  }
}
