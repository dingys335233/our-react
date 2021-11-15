/**
 * 这个模块的所有接口！！
 */
import {get, post} from '../fetch';

export const dysApi = {
  jiajiekou(params) { // 一个get接口
    get('/api/login', params);
  },
  jiajiekou2(params) { // 一个post接口
    post('/api/login', params);
  }
};
