<template>
    <div class="page-wrapper">
        <div class="app">
            <!-- 顶部：外层布局不动，填充内容 -->
            <div class="app-top">
                <div class="top-content">
                    <div class="dim-group">
                        <span class="dim-label">统计维度</span>
                        <button class="dim-tab active">仓库</button>
                        <button class="dim-tab">商品</button>
                    </div>
                    <div class="wh-select-group">
                        <span class="wh-label">仓库</span>
                        <div class="wh-select">
                            <span class="wh-placeholder">请选择仓库</span>
                            <span class="wh-arrow">▾</span>
                        </div>
                    </div>
                    <div class="top-actions">
                        <button class="btn-reset">重置</button>
                        <button class="btn-search">搜索</button>
                        <span class="expand-text">展开 ▾</span>
                    </div>
                </div>
            </div>
            <div class="app-main">
                <div class="main-inner">
                    <!-- 标题栏 -->
                    <div class="main-header">
                        <div class="main-title">库存统计</div>
                        <div class="header-right">
                            <label class="filter-check">
                                <input type="checkbox" />
                                <span>过滤掉库存为 0 的商品</span>
                            </label>
                            <button class="btn-circle-blue">🔍</button>
                            <button class="btn-circle">⟳</button>
                            <button class="btn-circle">⛶</button>
                            <button class="btn-circle">☷</button>
                        </div>
                    </div>

                    <!-- 表格 -->
                    <div class="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th class="col-wh">仓库</th>
                                    <th class="col-prod">商品信息</th>
                                    <th class="col-spec">规格信息</th>
                                    <th class="col-stock">库存</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in tableData" :key="index">
                                    <td
                                        v-if="row.isWarehouseFirst"
                                        :rowspan="row.warehouseRowspan"
                                        class="col-wh cell-warehouse"
                                    >
                                        {{ row.warehouseName }}
                                    </td>
                                    <td
                                        v-if="row.isProductFirst"
                                        :rowspan="row.productRowspan"
                                        class="col-prod cell-product"
                                    >
                                        <div class="p-name">{{ row.productName }}</div>
                                        <div class="p-code">商品编号：{{ row.productCode }}</div>
                                    </td>
                                    <td class="col-spec cell-spec">
                                        <div class="s-name">{{ row.specName }}</div>
                                        <div class="s-code">规格编号：{{ row.specCode }}</div>
                                    </td>
                                    <td class="col-stock cell-stock">{{ row.stock }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 底部分页 -->
                    <div class="main-footer">
                        <span>共 {{ totalCount }} 条记录</span>
                        <select class="page-size">
                            <option>20条/页</option>
                            <option>50条/页</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            totalCount: 32,
            warehouseList: [
                {
                    name: "上海仓",
                    products: [
                        {
                            name: "iPhone 15 Pro",
                            code: "SPU-IPHONE15P",
                            specs: [
                                { name: "256G 原色钛金属", code: "SKU-IPHONE15P-256-N", stock: "26.00" },
                                { name: "512G 蓝色钛金属", code: "SKU-IPHONE15P-512-B", stock: "9.00" },
                            ],
                        },
                        {
                            name: "A4 复印纸",
                            code: "SPU-A4-PAPER",
                            specs: [
                                { name: "70g 8包/箱", code: "SKU-A4-70G-8", stock: "366.00" },
                            ],
                        },
                        {
                            name: "可口可乐汽水",
                            code: "SPU-COLA",
                            specs: [
                                { name: "330ml*24 罐", code: "SKU-COLA-330-24", stock: "112.00" },
                            ],
                        },
                        {
                            name: "红富士苹果",
                            code: "SPU-APPLE",
                            specs: [
                                { name: "5kg 装箱", code: "SKU-APPLE-5KG", stock: "83.00" },
                            ],
                        },
                    ],
                },
                {
                    name: "北京仓",
                    products: [
                        {
                            name: "iPhone 15 Pro",
                            code: "SPU-IPHONE15P",
                            specs: [
                                { name: "256G 原色钛金属", code: "SKU-IPHONE15P-256-N", stock: "10.00" },
                            ],
                        },
                        {
                            name: "MacBook Air M3",
                            code: "SPU-MBA-M3",
                            specs: [
                                { name: "15英寸 16G+512G", code: "SKU-MBA-M3-15-512", stock: "3.00" },
                            ],
                        },
                        {
                            name: "格力 1.5P 空调",
                            code: "SPU-GL-15P",
                            specs: [
                                { name: "新一级能效", code: "SKU-GL-15P-L1", stock: "15.00" },
                            ],
                        },
                        {
                            name: "A4 复印纸",
                            code: "SPU-A4-PAPER",
                            specs: [
                                { name: "70g 8包/箱", code: "SKU-A4-70G-8", stock: "110.00" },
                            ],
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        tableData() {
            const rows = [];
            this.warehouseList.forEach((warehouse) => {
                // 计算该仓库总行数
                let whRowSpan = 0;
                warehouse.products.forEach((product) => {
                    whRowSpan += product.specs.length;
                });

                let whFirst = true;
                warehouse.products.forEach((product) => {
                    const prodRowSpan = product.specs.length;
                    let prodFirst = true;
                    product.specs.forEach((spec) => {
                        rows.push({
                            warehouseName: warehouse.name,
                            warehouseRowspan: whRowSpan,
                            isWarehouseFirst: whFirst,
                            productName: product.name,
                            productCode: product.code,
                            productRowspan: prodRowSpan,
                            isProductFirst: prodFirst,
                            specName: spec.name,
                            specCode: spec.code,
                            stock: spec.stock,
                        });
                        whFirst = false;
                        prodFirst = false;
                    });
                });
            });
            return rows;
        },
    },
};
</script>

<style scoped>
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}

.app {
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-top{
    width: 100%;
    height: 86px;
    margin-bottom: 12px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    box-sizing: border-box;
}

.top-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dim-group {
    display: flex;
    align-items: center;
    gap: 0;
}

.dim-label {
    font-size: 14px;
    color: #606266;
    margin-right: 12px;
    font-weight: 500;
}

.dim-tab {
    height: 32px;
    padding: 0 18px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    color: #606266;
    cursor: pointer;
    font-size: 14px;
}

.dim-tab:first-of-type {
    border-radius: 6px 0 0 6px;
    border-right: none;
}

.dim-tab:last-of-type {
    border-radius: 0 6px 6px 0;
}

.dim-tab.active {
    background-color: #006be6;
    border-color: #006be6;
    color: #fff;
}

.wh-select-group {
    display: flex;
    align-items: center;
}

.wh-label {
    font-size: 14px;
    color: #606266;
    margin-right: 8px;
    font-weight: 500;
}

.wh-select {
    width: 220px;
    height: 32px;
    border: 1px solid #dcdfe6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    cursor: pointer;
    box-sizing: border-box;
}

.wh-placeholder {
    font-size: 14px;
    color: #c0c4cc;
}

.wh-arrow {
    font-size: 12px;
    color: #909399;
}

/* 右侧操作 */
.top-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-reset {
    width: 72px;
    height: 32px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    color: #606266;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
}

.btn-search {
    width: 72px;
    height: 32px;
    border: none;
    background-color: #006be6;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
}

.expand-text {
    font-size: 14px;
    color: #006be6;
    cursor: pointer;
}

.app-main{
    width: 100%;
    height: 492px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
}

.main-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* 标题栏 */
.main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    flex-shrink: 0;
}

.main-title {
    font-size: 18px;
    font-weight: 600;
    color: #303133;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-check {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    margin-right: 4px;
}

.filter-check input {
    cursor: pointer;
}

.btn-circle-blue {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #006be6;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
}

.btn-circle {
    width: 32px;
    height: 32px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    color: #606266;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
}

/* 表格 */
.table-wrap {
    flex: 1;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    overflow: auto;
}

.table-wrap table {
    width: 100%;
    min-width: 700px;
    border-collapse: collapse;
    font-size: 14px;
}

.table-wrap th {
    height: 42px;
    padding: 0 12px;
    background-color: #ccc;
    border-bottom: 1px solid #e4e7ed;
    border-right: 1px solid #e4e7ed;
    text-align: center;
    font-weight: 500;
}

.table-wrap th:last-child {
    border-right: none;
}

.table-wrap td {
    padding: 10px 12px;
    border-bottom: 1px solid #ebeef5;
    border-right: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
}

.table-wrap td:last-child {
    border-right: none;
}

.table-wrap tbody tr:hover {
    background-color: #f5f7fa;
}

/* 各列宽度 */
.col-wh {
    width: 120px;
    min-width: 120px;
}

.col-prod {
    width: 240px;
    min-width: 240px;
}

.col-spec {
    width: 260px;
    min-width: 260px;
}

.col-stock {
    width: 100px;
    min-width: 100px;
}

/* 仓库单元格 */
.cell-warehouse {
    font-size: 15px;
    font-weight: 500;
    color: #303133;
}

/* 商品信息单元格 */
.cell-product {
    text-align: center;
}

.p-name {
    font-size: 15px;
    font-weight: 500;
    color: #303133;
    margin-bottom: 4px;
}

.p-code {
    font-size: 13px;
    color: #909399;
}

/* 规格信息单元格 */
.cell-spec {
    text-align: center;
}

.s-name {
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    margin-bottom: 4px;
}

.s-code {
    font-size: 13px;
    color: #909399;
}

/* 库存单元格 */
.cell-stock {
    font-size: 15px;
    font-weight: 500;
    color: #303133;
    text-align: right !important;
    padding-right: 20px !important;
}

/* 底部分页 */
.main-footer {
    display: flex;
    align-items: center;
    padding-top: 10px;
    font-size: 14px;
    color: #606266;
    flex-shrink: 0;
}

.page-size {
    height: 30px;
    padding: 0 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 14px;
    color: #606266;
    outline: none;
    cursor: pointer;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-right: 5px;
}


</style>