/**
 * axios配置
 */
import axios from 'axios';

const instance = axios.create({
  headers: {
    'Cache-Control': 'no-cache' // 默认接口全部不缓存（防止get请求被缓存的问题）
  },
  timeout: 60000 // 超时时间设置为60s
});

/**
* 请求拦截
*/
instance.interceptors.request.use(request => {
  return request;
});

/**
* 响应拦截
*/
instance.interceptors.response.use(response => {
  return response;
}, error => {
  if (error?.status) {
    switch(error.response.status) { // 状态码判断
    case 400: error.message = 'http-code: 400, 请求无效!'; break;
    case 401: error.message = 'http-code: 401，未授权！'; break;
    case 403: error.message = 'http-code: 403，禁止访问！'; break;
    case 404: error.message = 'http-code: 404，找不到文件！'; break;
    case 405: error.message = 'http-code: 405，资源被禁止！'; break;
    case 406: error.message = 'http-code: 406，无法接受！'; break;
    case 407: error.message = 'http-code: 407，要求代理身份验证！'; break;
    case 408: error.message = 'http-code: 408，请求超时！'; break;
    case 414: error.message = 'http-code: 414，请求URI太长！'; break;
    case 500: error.message = 'http-code: 500，服务器内部错误！，'; break;
    case 501: error.message = 'http-code: 501，服务器未实现！'; break;
    case 502: error.message = 'http-code: 502，网关错误！'; break;
    case 503: error.message = 'http-code: 503，服务器不可用！'; break;
    case 504: error.message = 'http-code: 504，网关超时！'; break;
    case 505: error.message = 'http-code: 505，HTTP版本不受支持！'; break;
    default: error.message = 'http-code: ' + error.response.status; break;
    }
  }
  return Promise.reject(error.response);
});


/**
 * Get/Post请求接口封装
 */
 export const get = (url, params, callback) => {
  return new Promise((resolve, reject) => {
    instance.get('/platform' + url, {params}).then(res => {
      if (callback) callback();
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  });
};

export const post = (url, params, callback) => {
  return new Promise((resolve, reject) => {
    instance.post('/platform' + url, params).then(res => {
      if (callback) callback();
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  });
};
