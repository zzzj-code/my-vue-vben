<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>菜单列表</div>
          <div>
            <button style="background-color: #fff; border: 0"></button>
            <button>ip 查询</button>
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
                <th>地区编码</th>
                <th>地区名称</th>
                <th>类型</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.regionCode }}</td>
                <td>{{ item.regionName }}</td>
                <td>{{ item.type }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
          regionCode: "110000",
          regionName: "北京市",
          type: "省级",
        },
        {
          regionCode: "110100",
          regionName: "北京市",
          type: "市级",
        },
        {
          regionCode: "110101",
          regionName: "东城区",
          type: "区县级",
        },
        {
          regionCode: "110102",
          regionName: "西城区",
          type: "区县级",
        },
        {
          regionCode: "110105",
          regionName: "朝阳区",
          type: "区县级",
        },
        {
          regionCode: "110108",
          regionName: "海淀区",
          type: "区县级",
        },
        {
          regionCode: "310000",
          regionName: "上海市",
          type: "省级",
        },
        {
          regionCode: "310100",
          regionName: "上海市",
          type: "市级",
        },
        {
          regionCode: "310101",
          regionName: "黄浦区",
          type: "区县级",
        },
        {
          regionCode: "310105",
          regionName: "长宁区",
          type: "区县级",
        },
        {
          regionCode: "310106",
          regionName: "静安区",
          type: "区县级",
        },
        {
          regionCode: "310109",
          regionName: "虹口区",
          type: "区县级",
        },
        {
          regionCode: "440000",
          regionName: "广东省",
          type: "省级",
        },
        {
          regionCode: "440100",
          regionName: "广州市",
          type: "市级",
        },
        {
          regionCode: "440103",
          regionName: "荔湾区",
          type: "区县级",
        },
        {
          regionCode: "440104",
          regionName: "越秀区",
          type: "区县级",
        },
        {
          regionCode: "440105",
          regionName: "海珠区",
          type: "区县级",
        },
        {
          regionCode: "440106",
          regionName: "天河区",
          type: "区县级",
        },
        {
          regionCode: "440300",
          regionName: "深圳市",
          type: "市级",
        },
        {
          regionCode: "440303",
          regionName: "罗湖区",
          type: "区县级",
        },
        {
          regionCode: "440304",
          regionName: "福田区",
          type: "区县级",
        },
        {
          regionCode: "440305",
          regionName: "南山区",
          type: "区县级",
        },
        {
          regionCode: "440306",
          regionName: "宝安区",
          type: "区县级",
        },
        {
          regionCode: "440307",
          regionName: "龙岗区",
          type: "区县级",
        },
        {
          regionCode: "320000",
          regionName: "江苏省",
          type: "省级",
        },
        {
          regionCode: "320100",
          regionName: "南京市",
          type: "市级",
        },
        {
          regionCode: "320102",
          regionName: "玄武区",
          type: "区县级",
        },
        {
          regionCode: "320104",
          regionName: "秦淮区",
          type: "区县级",
        },
        {
          regionCode: "320105",
          regionName: "建邺区",
          type: "区县级",
        },
        {
          regionCode: "320500",
          regionName: "苏州市",
          type: "市级",
        },
        {
          regionCode: "320505",
          regionName: "虎丘区",
          type: "区县级",
        },
        {
          regionCode: "320506",
          regionName: "吴中区",
          type: "区县级",
        },
        {
          regionCode: "320508",
          regionName: "姑苏区",
          type: "区县级",
        },
        {
          regionCode: "330000",
          regionName: "浙江省",
          type: "省级",
        },
        {
          regionCode: "330100",
          regionName: "杭州市",
          type: "市级",
        },
        {
          regionCode: "330105",
          regionName: "拱墅区",
          type: "区县级",
        },
        {
          regionCode: "330106",
          regionName: "西湖区",
          type: "区县级",
        },
        {
          regionCode: "330108",
          regionName: "滨江区",
          type: "区县级",
        },
      ],
    };
  },
};
</script>

<style scoped>
.asd {
  position: absolute;
  top: 50%;
  left: 51%;
}
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
.app-main {
  width: 100%;
  height: 578px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
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
  height: 500px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
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
  width: 220px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:first-child {
  width: 84px;
}
.ol-col button:last-child {
  color: red;
}
</style>
