# IoT 物联网模块 API 说明

## 模块概述
物联网管理模块，包含设备管理、产品管理、告警管理、OTA升级、规则引擎、物模型、统计等功能。

## API 文件与页面对应关系

### 设备管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/device/device/index.js` | `views/pages/iot/device/device-list.vue` | 设备管理 | ❌ | 设备的增删改查、分页查询 |
| `iot/device/group/index.js` | `views/pages/iot/device/device-group.vue` | 设备分组 | ❌ | 设备分组的增删改查 |
| `iot/device/modbus/config/index.js` | `views/pages/iot/device/modbus-config.vue` | Modbus配置 | ❌ | Modbus协议配置 |
| `iot/device/modbus/point/index.js` | `views/pages/iot/device/modbus-point.vue` | Modbus点位 | ❌ | Modbus点位配置 |

### 产品管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/product/product/index.js` | `views/pages/iot/product/product-list.vue` | 产品管理 | ❌ | 产品的增删改查、分页查询 |
| `iot/product/category/index.js` | `views/pages/iot/product/product-category.vue` | 产品分类 | ❌ | 产品分类的增删改查 |

### 告警管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/alert/config/index.js` | `views/pages/iot/alert/alert-config.vue` | 告警配置 | ❌ | 告警规则的增删改查 |
| `iot/alert/record/index.js` | `views/pages/iot/alert/alert-record.vue` | 告警记录 | ❌ | 告警记录的查询、分页 |

### OTA 升级
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/ota/firmware/index.js` | `views/pages/iot/ota/firmware-list.vue` | 固件管理 | ❌ | 固件的上传、查询、删除 |
| `iot/ota/task/index.js` | `views/pages/iot/ota/ota-task.vue` | 升级任务 | ❌ | OTA升级任务的创建、查询 |
| `iot/ota/task/record/index.js` | `views/pages/iot/ota/ota-task-record.vue` | 升级记录 | ❌ | OTA升级记录的查询 |

### 规则引擎
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/rule/data/rule/index.js` | `views/pages/iot/rule/data-rule.vue` | 数据规则 | ❌ | 数据处理规则的增删改查 |
| `iot/rule/data/sink/index.js` | `views/pages/iot/rule/data-sink.vue` | 数据目的地 | ❌ | 数据转发目的地配置 |
| `iot/rule/scene/index.js` | `views/pages/iot/rule/scene-rule.vue` | 场景联动 | ❌ | 场景联动规则的增删改查 |

### 物模型
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/thingmodel/index.js` | `views/pages/iot/thingmodel/thingmodel-list.vue` | 物模型 | ❌ | 物模型的增删改查 |

### 统计分析
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `iot/statistics/index.js` | `views/pages/iot/statistics/iot-statistics.vue` | 物联网统计 | ❌ | 设备数据统计分析 |

## 接口路径前缀
所有IoT模块接口前缀：`/admin-api/iot`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 设备状态：1=在线，2=离线，3=未激活
