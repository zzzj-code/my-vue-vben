import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api',
  timeout: 60000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // 租户 ID（默认 1）
    config.headers['tenant-id'] = '1';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // code = 0 表示成功
    if (res.code === 0) {
      return res;
    }
    // 登录过期
    if (res.code === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }
    // IM模块请求失败只打印控制台，不弹窗
    const isImRequest = response.config && response.config.url && response.config.url.indexOf('/im/') !== -1;
    if (isImRequest) {
      console.error('[IM请求失败]', response.config.url, res.msg || '请求失败');
      return Promise.reject(new Error(res.msg || '请求失败'));
    }
    // 其他错误
    alert(res.msg || '请求失败');
    return Promise.reject(new Error(res.msg || '请求失败'));
  },
  (error) => {
    // IM模块网络错误只打印控制台，不弹窗
    const isImRequest = error.config && error.config.url && error.config.url.indexOf('/im/') !== -1;
    if (isImRequest) {
      console.error('[IM网络错误]', error.config ? error.config.url : '', error.message || '网络错误');
      return Promise.reject(error);
    }
    alert(error.message || '网络错误');
    return Promise.reject(error);
  }
);

// 封装请求方法
const requestClient = {
  get(url, config = {}) {
    return service.get(url, config).then((res) => res.data);
  },
  post(url, data, config = {}) {
    return service.post(url, data, config).then((res) => res.data);
  },
  put(url, data, config = {}) {
    return service.put(url, data, config).then((res) => res.data);
  },
  delete(url, config = {}) {
    return service.delete(url, config).then((res) => res.data);
  },
  download(url, params) {
    return service.get(url, { params, responseType: 'blob' });
  },
};

// 基础请求客户端（不经过响应拦截器的 data 提取）
const baseRequestClient = {
  get(url, config = {}) {
    return service.get(url, config);
  },
  post(url, data, config = {}) {
    return service.post(url, data, config);
  },
  put(url, data, config = {}) {
    return service.put(url, data, config);
  },
  delete(url, config = {}) {
    return service.delete(url, config);
  },
};

export { baseRequestClient, requestClient };
