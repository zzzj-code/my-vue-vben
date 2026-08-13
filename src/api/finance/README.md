# 财务模块 API 说明文档

## 模块概述
财务模块主要负责企业财务管理中的发票相关业务，包括发票抬头管理、进项发票、销项发票、开票申请、发票台账和开票项目等功能。

## 接口路径前缀
- 基础路径：`/admin-api/finance`
- 所有接口通过网关转发，前端代理路径：`/api/finance/xxx`

## API 文件与页面对应关系

| API文件 | 对应页面 | 功能说明 | 接口路径前缀 |
|---------|---------|---------|-------------|
| invoice/title.js | finance/invoice/invoice-title.vue | 发票抬头管理 | /finance/invoice-title |
| invoice/input.js | finance/invoice/input-invoice.vue | 进项发票管理 | /finance/invoice-input |
| invoice/output.js | finance/invoice/output-invoice.vue | 销项发票管理 | /finance/invoice-output |
| invoice/apply.js | finance/invoice/invoice-apply.vue | 开票申请管理 | /finance/invoice-apply |
| invoice/pool.js | finance/invoice/invoice-pool.vue | 发票台账（发票池） | /finance/invoice-pool |
| invoice/goods.js | finance/invoice/invoice-goods.vue | 开票项目（发票商品） | /finance/invoice-goods |

## 各API文件详细说明

### 1. invoice/title.js - 发票抬头API
**对应页面**：finance/invoice/invoice-title.vue

**接口列表**：
- `getInvoiceTitlePage(params)` - 获取发票抬头分页列表
- `getInvoiceTitle(id)` - 获取发票抬头详情
- `createInvoiceTitle(data)` - 新增发票抬头
- `updateInvoiceTitle(data)` - 修改发票抬头
- `deleteInvoiceTitle(id)` - 删除发票抬头
- `deleteInvoiceTitleListByIds(ids)` - 批量删除发票抬头
- `exportInvoiceTitle(params)` - 导出发票抬头

**主要字段**：
- titleName：抬头名称
- titleType：抬头类型
- taxNumber：纳税人识别号
- bankName：开户银行
- bankAccount：银行账号
- phone：电话

### 2. invoice/input.js - 进项发票API
**对应页面**：finance/invoice/input-invoice.vue

**接口列表**：
- `getInputInvoicePage(params)` - 获取进项发票分页列表
- `getInputInvoice(id)` - 获取进项发票详情
- `createInputInvoice(data)` - 新增进项发票（录入发票）
- `updateInputInvoice(data)` - 修改进项发票
- `deleteInputInvoice(id)` - 删除进项发票
- `deleteInputInvoiceListByIds(ids)` - 批量删除进项发票
- `exportInputInvoice(params)` - 导出进项发票

**主要字段**：
- invoiceNo：单据编号
- invoiceNumber：发票号码
- sellerName：销方名称
- invoiceType：发票类型
- totalAmount：价税合计
- authStatus：认证状态
- source：来源
- invoiceDate：开票日期

### 3. invoice/output.js - 销项发票API
**对应页面**：finance/invoice/output-invoice.vue

**接口列表**：
- `getOutputInvoicePage(params)` - 获取销项发票分页列表
- `getOutputInvoice(id)` - 获取销项发票详情
- `createOutputInvoice(data)` - 新增销项发票（开票登记）
- `updateOutputInvoice(data)` - 修改销项发票
- `deleteOutputInvoice(id)` - 删除销项发票
- `deleteOutputInvoiceListByIds(ids)` - 批量删除销项发票
- `exportOutputInvoice(params)` - 导出销项发票

**主要字段**：
- invoiceNo：单据编号
- invoiceNumber：发票号码
- buyerName：购方名称
- invoiceType：发票类型
- totalAmount：价税合计
- status：状态
- invoiceDate：开票日期

### 4. invoice/apply.js - 开票申请API
**对应页面**：finance/invoice/invoice-apply.vue

**接口列表**：
- `getInvoiceApplyPage(params)` - 获取开票申请分页列表
- `getInvoiceApply(id)` - 获取开票申请详情
- `createInvoiceApply(data)` - 新增开票申请
- `updateInvoiceApply(data)` - 修改开票申请
- `deleteInvoiceApply(id)` - 删除开票申请
- `deleteInvoiceApplyListByIds(ids)` - 批量删除开票申请
- `submitInvoiceApply(id)` - 提交开票申请（审核）
- `exportInvoiceApply(params)` - 导出开票申请

**主要字段**：
- invoiceNo：单据编号
- buyerName：购方名称
- invoiceType：发票类型
- totalAmount：价税合计
- paidAmount：已开票金额
- status：单据状态
- progress：开票进度
- applicant：申请人
- department：申请部门
- createTime：创建时间

### 5. invoice/pool.js - 发票台账（发票池）API
**对应页面**：finance/invoice/invoice-pool.vue

**接口列表**：
- `getInvoicePoolPage(params)` - 获取发票台账分页列表
- `getInvoicePool(id)` - 获取发票台账详情
- `exportInvoicePool(params)` - 导出发票台账

**主要字段**：
- direction：方向（进项/销项）
- invoiceNo：单据编号
- invoiceNumber：发票号码
- counterpartyName：对方单位
- invoiceType：发票类型
- totalAmount：价税合计
- invoiceDate：开票日期

### 6. invoice/goods.js - 开票项目（发票商品）API
**对应页面**：finance/invoice/invoice-goods.vue

**接口列表**：
- `getInvoiceGoodsPage(params)` - 获取开票项目分页列表
- `getInvoiceGoods(id)` - 获取开票项目详情
- `createInvoiceGoods(data)` - 新增开票项目
- `updateInvoiceGoods(data)` - 修改开票项目
- `deleteInvoiceGoods(id)` - 删除开票项目
- `deleteInvoiceGoodsListByIds(ids)` - 批量删除开票项目
- `exportInvoiceGoods(params)` - 导出开票项目

**主要字段**：
- goodsName：项目名称
- taxCode：税收分类编码
- specification：规格型号
- unit：单位
- taxRate：税率(%)
- createTime：创建时间

## 通用接口说明

### 分页查询参数
所有分页查询接口都支持以下参数：
- `pageNo`：页码，默认1
- `pageSize`：每页条数，默认10
- 各业务字段作为查询条件

### 分页返回格式
```json
{
  "code": 0,
  "data": {
    "list": [],
    "total": 0
  },
  "msg": ""
}
```

### 统一返回格式
```json
{
  "code": 0,
  "data": {},
  "msg": ""
}
```
- code=0表示成功
- code=401表示登录过期

## 注意事项
1. 财务模块的发票接口路径是按照RuoYi框架惯例创建的，实际后端接口路径可能需要根据后端实现进行调整。
2. 所有页面都已对接分页查询、搜索、重置、新增、编辑、删除等基础功能。
3. 新增和编辑功能目前使用alert提示，后续需要根据实际需求开发弹窗表单。
4. 导出功能已在API文件中定义，页面按钮暂未绑定事件。
5. 所有页面的样式部分保持原样，未做任何修改。
