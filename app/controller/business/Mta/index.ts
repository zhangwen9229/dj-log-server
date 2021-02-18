/*
 * @Date: 2021-02-04 17:41:56
 * @LastEditors: zhangwenshun
 * @LastEditTime: 2021-02-10 14:45:00
 * @title: 埋点逻辑
 * @description: 埋点逻辑
 * @created by: zhangwenshun
 */

import { LOG_ROOM } from "../../../db/datas";


export function processMtaLog(nsp, data) {
    console.log(data);
    
    (nsp as any).to(LOG_ROOM).emit('mta', data);
}