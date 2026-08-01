<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>缺陷编码</span>
            <input type="text" placeholder="请输入缺陷编码" />
          </div>
          <div>
            <span>缺陷描述</span>
            <input type="text" placeholder="请输入缺陷描述" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>缺陷类型列表</div>
          <div>
            <button>+新增缺陷类型</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>缺陷编码</th>
                <th>缺陷描述</th>
                <th>检测项类型</th>
                <th>缺陷等级</th>
                <th>备注</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.code }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共8条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: [
        {
          id: 1,
          code: "DEF-001",
          description: "尺寸超差（尺寸超出公差范围）",
          type: "尺寸缺陷",
          level: "严重",
          remark: "超过允许公差±0.1mm",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "DEF-002",
          description: "表面划伤（表面有明显划痕）",
          type: "外观缺陷",
          level: "一般",
          remark: "划痕长度≥5mm或深度≥0.1mm",
          createTime: "2024-01-15 14:20",
        },
        {
          id: 3,
          code: "DEF-003",
          description: "毛刺（产品边缘有未去除的毛刺）",
          type: "外观缺陷",
          level: "一般",
          remark: "毛刺高度≥0.2mm",
          createTime: "2024-01-20 09:15",
        },
        {
          id: 4,
          code: "DEF-004",
          description: "气孔（表面或内部有气孔）",
          type: "内部缺陷",
          level: "严重",
          remark: "气孔直径≥0.5mm或数量≥3个",
          createTime: "2024-02-01 11:00",
        },
        {
          id: 5,
          code: "DEF-005",
          description: "色差（颜色与标准色板偏差）",
          type: "外观缺陷",
          level: "一般",
          remark: "ΔE≥2.0",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 6,
          code: "DEF-006",
          description: "变形（产品形状变形）",
          type: "尺寸缺陷",
          level: "严重",
          remark: "平面度≥0.3mm或扭曲≥0.5mm",
          createTime: "2024-03-01 08:50",
        },
        {
          id: 7,
          code: "DEF-007",
          description: "缺料（注塑件填充不足）",
          type: "内部缺陷",
          level: "严重",
          remark: "缺料面积≥5mm²",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 8,
          code: "DEF-008",
          description: "缩水（表面凹陷）",
          type: "外观缺陷",
          level: "一般",
          remark: "凹陷深度≥0.1mm",
          createTime: "2024-04-01 10:20",
        },
      ],
    };
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
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 160px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>
