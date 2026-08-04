<template>
  <div>
      <!-- 弹窗 -->
      <el-dialog
        v-model="dialogVisible"
        :title="dialogTitle"
        width="90%"
        top="5vh"
        :fullscreen="true"
        @close="handleClose"
      >
        <iframe
          :src="pageUrl"
          frameborder="0"
          style="width: 1006px; height: 100vh"
        ></iframe>
      </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      pageUrl: "/home",
      dialogTitle: "",
    };
  },
  methods: {
    openPage(url, title) {
      this.pageUrl = url;
      this.dialogTitle = title || "页面";
      this.dialogVisible = true;
    },
    handleClose() {
      this.pageUrl = "";
    },
  },
};
</script>
