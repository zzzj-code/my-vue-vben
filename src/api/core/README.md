# Core 核心模块 API 说明

## 模块概述
核心模块，包含认证登录、系统初始化等核心功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `core/auth.js` | `views/pages/auth/login.vue`、`code-login.vue`、`register.vue`、`forget-password.vue` | 认证登录 | ✅ | 登录、登出、注册、忘记密码、短信验证码、刷新Token等 |
| `core/index.js` | 全局通用 | 核心接口 | ❌ | 系统初始化、获取租户信息等核心接口 |

## 认证接口说明

### 登录相关
- `login(data)` - 账号密码登录
- `smsLogin(data)` - 短信验证码登录
- `socialLogin(data)` - 社交登录
- `logout()` - 登出
- `refreshToken(refreshToken)` - 刷新Token

### 注册相关
- `register(data)` - 用户注册

### 忘记密码
- `sendSmsCode(mobile, scene)` - 发送短信验证码
- `smsResetPassword(data)` - 短信重置密码

### 其他
- `getLoginUserInfo()` - 获取当前登录用户信息

## 接口路径前缀
所有Core模块接口前缀：`/admin-api/system`

## 通用接口说明
- 认证接口不需要Token（登录、注册、忘记密码）
- 其他接口需要在请求头中携带 `Authorization: Bearer {token}`
- 租户ID通过请求头 `tenant-id` 传递，默认为1
