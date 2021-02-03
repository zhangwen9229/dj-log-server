/*
 * @Date: 2021-02-03 10:05:36
 * @LastEditors: zhangwenshun
 * @LastEditTime: 2021-02-03 10:08:16
 * @title: io 业务逻辑
 * @description: 描述
 * @created by: zhangwenshun
 */

import { Application } from "egg";
import { LOG_ROOM } from "../../db/datas";


export async function emitChangePersonSize(app: Application, personSize: number) {
    const nsp = app.io.of('/');

    (nsp as any).to(LOG_ROOM).emit('changePersonSize', personSize);
    
}