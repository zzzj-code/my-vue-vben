<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>文件路径</span>
            <input type="text" placeholder="请输入文件路径" />
          </div>
          <div>
            <span>文件类型</span>
            <input type="text" placeholder="请输入文件类型" />
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
          <div>文件列表</div>
          <div>
            <button>+上传文件</button>
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
                <th>文件名</th>
                <th>文件路径</th>
                <th>URL</th>
                <th>文件大小</th>
                <th>文件类型</th>
                <th>文件内容</th>
                <th>上传时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" name="" id="" /></td>
                <td>{{ item.fileName }}</td>
                <td>{{ item.filePath }}</td>
                <td>{{ item.fileUrl }}</td>
                <td>{{ item.fileSize }}</td>
                <td>{{ item.fileType }}</td>
                <td>{{ item.fileContent }}</td>
                <td>{{ item.uploadTime }}</td>
                <td class="ol-col">
                  <button>复制链接</button>
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
          fileName: "用户头像_张三.jpg",
          filePath: "/uploads/avatar/2026/08/",
          fileUrl:
            "https://cdn.example.com/uploads/avatar/2026/08/avatar_zhangsan.jpg",
          fileSize: "256.00 KB",
          fileType: "jpg",
          fileContent: "用户头像图片",
          uploadTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          fileName: "商品主图_华为Mate60.jpg",
          filePath: "/uploads/product/2026/08/",
          fileUrl:
            "https://cdn.example.com/uploads/product/2026/08/product_huawei_mate60.jpg",
          fileSize: "1.24 MB",
          fileType: "jpg",
          fileContent: "商品主图",
          uploadTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          fileName: "订单附件_ORD20260801001.pdf",
          filePath: "/uploads/order/2026/08/",
          fileUrl:
            "https://cdn.example.com/uploads/order/2026/08/order_ORD20260801001.pdf",
          fileSize: "456.78 KB",
          fileType: "pdf",
          fileContent: "订单附件",
          uploadTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          fileName: "系统日志_app.log",
          filePath: "/uploads/log/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/log/2026/07/app_20260731.log",
          fileSize: "3.56 MB",
          fileType: "log",
          fileContent: "系统日志文件",
          uploadTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          fileName: "数据库备份_20260730.sql",
          filePath: "/uploads/backup/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/backup/2026/07/backup_20260730.sql",
          fileSize: "125.80 MB",
          fileType: "sql",
          fileContent: "数据库备份",
          uploadTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          fileName: "教学视频_SpringBoot入门.mp4",
          filePath: "/uploads/video/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/video/2026/07/springboot_intro.mp4",
          fileSize: "45.60 MB",
          fileType: "mp4",
          fileContent: "教学视频",
          uploadTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          fileName: "产品需求文档_v2.1.docx",
          filePath: "/uploads/doc/2026/07/",
          fileUrl: "https://cdn.example.com/uploads/doc/2026/07/prd_v2.1.docx",
          fileSize: "2.34 MB",
          fileType: "docx",
          fileContent: "Word文档",
          uploadTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          fileName: "统计报表_2026Q2.xlsx",
          filePath: "/uploads/report/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/report/2026/07/report_2026Q2.xlsx",
          fileSize: "567.89 KB",
          fileType: "xlsx",
          fileContent: "Excel报表",
          uploadTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          fileName: "API接口文档_v3.0.pdf",
          filePath: "/uploads/doc/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/doc/2026/07/api_doc_v3.0.pdf",
          fileSize: "1.89 MB",
          fileType: "pdf",
          fileContent: "PDF文档",
          uploadTime: "2026-07-28 10:00:00",
        },
        {
          id: 10,
          fileName: "temp_cache_20260728.tmp",
          filePath: "/uploads/temp/2026/07/",
          fileUrl:
            "https://cdn.example.com/uploads/temp/2026/07/cache_20260728.tmp",
          fileSize: "98.00 KB",
          fileType: "tmp",
          fileContent: "临时缓存文件",
          uploadTime: "2026-07-28 08:20:00",
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
  width: max-content;
  min-width: 1250px;
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
  width: 160px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 80px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  width: 38px;
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
