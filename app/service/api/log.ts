import { Service } from 'egg';

/**
 * Test Service
 */
export default class Log extends Service {
    constructor(ctx) {
        super(ctx);
        // this.root = 'https://cnodejs.org/api/v1';
    }

    async create(params) {
        // 调用 CNode V1 版本 API

        // 检查调用是否成功，如果调用失败会抛出异常
        // this.checkSuccess(result);
        // 返回创建的 topic 的 id
        return params;
    }
}
