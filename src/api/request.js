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
    // 其他错误
    alert(res.msg || '请求失败');
    return Promise.reject(new Error(res.msg || '请求失败'));
  },
  (error) => {
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
