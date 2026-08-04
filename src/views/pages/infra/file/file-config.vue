<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>配置名</span>
            <input type="text" placeholder="请输入配置名" />
          </div>
          <div>
            <span>存储器</span>
            <input type="text" placeholder="请输入存储器" />
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
          <div>文件配置列表</div>
          <div>
            <button>+新增文件配置</button>
            <button disabled>批量删除</button>
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
                <th><input type="checkbox" /></th>
                <th>编号</th>
                <th>配置名</th>
                <th>存储器</th>
                <th>备注</th>
                <th>主配置</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" name="" id="" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.configName }}</td>
                <td>{{ item.storage }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.isMain }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>测试</button>
                  <button>主配置</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ tabValue.length }}条记录<span>20条/页</span>
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
          id: 1,
          configName: "用户头像存储配置",
          storage: "阿里云OSS",
          remark: "存储用户头像文件，支持jpg/png格式",
          isMain: "是",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          configName: "商品图片存储配置",
          storage: "腾讯云COS",
          remark: "存储商品主图和详情图，支持jpg/png/webp格式",
          isMain: "否",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          configName: "订单附件存储配置",
          storage: "七牛云Kodo",
          remark: "存储订单相关附件和凭证文件",
          isMain: "否",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          configName: "系统日志存储配置",
          storage: "阿里云OSS",
          remark: "存储系统运行日志和应用日志",
          isMain: "否",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          configName: "备份文件存储配置",
          storage: "华为云OBS",
          remark: "存储数据库备份文件，保留30天",
          isMain: "否",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          configName: "视频文件存储配置",
          storage: "腾讯云COS",
          remark: "存储教学视频和培训视频文件",
          isMain: "否",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          configName: "文档文件存储配置",
          storage: "七牛云Kodo",
          remark: "存储PDF、Word、Excel等文档文件",
          isMain: "否",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          configName: "临时文件存储配置",
          storage: "本地存储",
          remark: "存储临时缓存文件和中间文件",
          isMain: "否",
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          configName: "报表文件存储配置",
          storage: "阿里云OSS",
          remark: "存储生成的各类报表和统计文件",
          isMain: "否",
          createTime: "2026-07-28 10:00:00",
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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 30%;
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
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
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
  height: 400px;
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
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ol-col {
  width: 240px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 46px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:nth-child(3) {
  width: 60px;
}
.ol-col button:last-child {
  color: red;
}
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
