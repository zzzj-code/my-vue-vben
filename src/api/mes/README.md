# MES制造执行系统模块 API说明文档

## 模块概述
MES（Manufacturing Execution System）制造执行系统模块，用于生产制造过程的管理和控制，包括主数据管理、生产管理、质量管理、设备管理、仓储管理、日历排班、工装管理等功能。

## 接口路径前缀
所有接口统一前缀：`/admin-api/mes`

## API文件与页面对应关系

### 一、cal（日历排班）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| cal/calendar.js | mes/cal/calendar.vue | 日历设置 |
| cal/holiday.js | mes/cal/holiday.vue | 节假日设置 |
| cal/plan.js | mes/cal/plan.vue | 排班计划 |
| cal/team.js | mes/cal/team.vue | 班组设置 |

### 二、dv（设备管理）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| dv/check-record.js | mes/dv/check-record.vue | 点检记录 |
| dv/checkplan.js | mes/dv/checkplan.vue | 点检计划 |
| dv/machinery.js | mes/dv/machinery.vue | 设备台账 |
| dv/mainten-record.js | mes/dv/mainten-record.vue | 保养记录 |
| dv/repair.js | mes/dv/repair.vue | 维修工单 |
| dv/subject.js | mes/dv/subject.vue | 设备科目 |
| dv/type.js | mes/dv/type.vue | 设备类型 |

### 三、md（主数据）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| md/auto-code.js | mes/md/auto-code.vue | 自动编码 |
| md/client.js | mes/md/client.vue | 客户管理 |
| md/item-type.js | mes/md/item-type.vue | 物料分类 |
| md/item.js | mes/md/item.vue | 物料产品 |
| md/unit-measure.js | mes/md/unit-measure.vue | 计量单位 |
| md/vendor.js | mes/md/vendor.vue | 供应商管理 |
| md/workshop.js | mes/md/workshop.vue | 车间管理 |
| md/workstation.js | mes/md/workstation.vue | 工位管理 |

### 四、pro（生产管理）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| pro/andon.js | mes/pro/andon.vue | 安灯呼叫 |
| pro/card.js | mes/pro/card.vue | 生产看板 |
| pro/feedback.js | mes/pro/feedback.vue | 生产报工 |
| pro/process.js | mes/pro/process.vue | 工序管理 |
| pro/route.js | mes/pro/route.vue | 工艺路线 |
| pro/work-order.js | mes/pro/work-order.vue | 生产工单 |
| pro/workrecord.js | mes/pro/workrecord.vue | 生产记录 |

### 五、qc（质量管理）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| qc/batch-trace.js | mes/qc/batch-trace.vue | 批次追溯 |
| qc/defect.js | mes/qc/defect.vue | 缺陷管理 |
| qc/indicator.js | mes/qc/indicator.vue | 质量指标 |
| qc/ipqc.js | mes/qc/ipqc.vue | 过程检验 |
| qc/iqc.js | mes/qc/iqc.vue | 来料检验 |
| qc/oqc.js | mes/qc/oqc.vue | 出货检验 |
| qc/pending-inspect.js | mes/qc/pending-inspect.vue | 待检列表 |
| qc/rqc.js | mes/qc/rqc.vue | 退货检验 |
| qc/template.js | mes/qc/template.vue | 检验模板 |

### 六、tm（工装管理）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| tm/tool.js | mes/tm/tool.vue | 工装台账 |
| tm/type.js | mes/tm/type.vue | 工装类型 |

### 七、wm（仓储管理）模块
| API文件 | 对应页面 | 功能说明 |
|---------|---------|---------|
| wm/arrival-notice.js | mes/wm/arrival-notice.vue | 到货通知 |
| wm/barcode.js | mes/wm/barcode.vue | 条码管理 |
| wm/item-receipt.js | mes/wm/item-receipt.vue | 物料入库 |
| wm/material-stock.js | mes/wm/material-stock.vue | 物料库存 |
| wm/misc-issue.js | mes/wm/misc-issue.vue | 杂项出库 |
| wm/misc-receipt.js | mes/wm/misc-receipt.vue | 杂项入库 |
| wm/outsource-issue.js | mes/wm/outsource-issue.vue | 委外出库 |
| wm/outsource-receipt.js | mes/wm/outsource-receipt.vue | 委外入库 |
| wm/packages.js | mes/wm/packages.vue | 包装管理 |
| wm/product-issue.js | mes/wm/product-issue.vue | 产品出库 |
| wm/product-receipt.js | mes/wm/product-receipt.vue | 产品入库 |
| wm/product-sales.js | mes/wm/product-sales.vue | 产品销售 |
| wm/return-issue.js | mes/wm/return-issue.vue | 退货出库 |
| wm/return-sales.js | mes/wm/return-sales.vue | 销售退货 |
| wm/return-vendor.js | mes/wm/return-vendor.vue | 供应商退货 |
| wm/sales-notice.js | mes/wm/sales-notice.vue | 发货通知 |
| wm/sn.js | mes/wm/sn.vue | 序列号管理 |
| wm/transfer.js | mes/wm/transfer.vue | 库存调拨 |
| wm/warehouse.js | mes/wm/warehouse.vue | 仓库管理 |
| wm/stock-taking/plan.js | mes/wm/stock-taking/plan.vue | 盘点计划 |
| wm/stock-taking/task.js | mes/wm/stock-taking/task.vue | 盘点任务 |

## 暂无对应API的页面
- mes/home.vue - MES首页（仪表盘，使用统计接口）

## 通用接口说明
每个API文件都包含以下通用接口：
- `getXxxPage(params)` - 分页查询列表
- `getXxx(id)` - 根据ID获取详情
- `createXxx(data)` - 新增
- `updateXxx(data)` - 修改
- `deleteXxx(id)` - 根据ID删除
- `deleteXxxListByIds(ids)` - 批量删除
- `exportXxx(params)` - 导出Excel

## 注意事项
1. 部分MES接口可能返回501错误（模块未启用），需要在后端开启MES模块
2. 搜索表单的字段名使用了占位符（field1、field2等），需要根据实际接口参数进行调整
3. 操作列的部分按钮（如库区、条码等）未绑定事件，需要根据实际业务需求添加
4. 物料产品(md/item)和生产工单(pro/work-order)页面已做详细字段映射，其他页面使用通用数据绑定
