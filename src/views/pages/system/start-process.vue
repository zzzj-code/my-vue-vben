<template>
  <div class="page-wrapper">
    <div class="app">
        <div class="app-main">
            <div class="main-top">
                <div>全部流程</div>
                <div>
                    <input type="text" placeholder="请输入流程名称检索" v-model="searchKeyword" @keyup.enter="handleSearch">
                    <button @click="handleSearch">🔍</button>
                </div>
            </div>
            <div class="main-tab">
                <div class="tab-layout">
                    <aside class="tab-sidebar">
                        <ul>
                            <li
                                v-for="(tab, index) in tabs"
                                :key="tab"
                                :class="{ active: index === activeIndex }"
                                @click="setActive(index)"
                            >
                                {{ tab }}
                            </li>
                        </ul>
                    </aside>
                    <section class="tab-grid">
                        <div
                            v-for="item in currentItems"
                            :key="item.title"
                            class="process-card"
                        >
                            <span class="tag">{{ item.tag }}</span>
                            <span>{{ item.title }}</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
// 导入流程分类和流程定义相关API
import { getCategorySimpleList } from '#/api/bpm/category';
import { getSimpleProcessDefinitionList } from '#/api/bpm/definition';

// 分类列表（从接口获取）
const tabs = ref([])
// 所有流程定义（从接口获取）
const allProcessList = ref([])
// 搜索关键词
const searchKeyword = ref('')

const activeIndex = ref(0)
const setActive = index => {
  activeIndex.value = index
}

// 获取分类列表
const loadCategoryList = async () => {
  try {
    const data = await getCategorySimpleList();
    tabs.value = data.map(item => item.name);
  } catch (err) {
    console.error("获取流程分类失败", err);
  }
}

// 获取所有流程定义
const loadProcessList = async () => {
  try {
    const data = await getSimpleProcessDefinitionList();
    // 将接口返回的数据转换为页面需要的格式
    allProcessList.value = data.map(item => ({
      id: item.id,
      name: item.name,
      key: item.key,
      // 图标字段为null，用流程名称的第一个字作为图标
      tag: item.name ? item.name.charAt(0) : '流',
      title: item.name,
    }));
  } catch (err) {
    console.error("获取流程定义失败", err);
  }
}

// 当前显示的流程列表（根据搜索关键词过滤）
const currentItems = computed(() => {
  if (!searchKeyword.value) {
    return allProcessList.value;
  }
  return allProcessList.value.filter(item =>
    item.title.includes(searchKeyword.value)
  );
})

// 搜索
const handleSearch = () => {
  // computed 会自动响应 searchKeyword 的变化
}

// 页面加载时获取数据
onMounted(() => {
  loadCategoryList();
  loadProcessList();
})
</script>

<style scoped>
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}
.app{
    width: 1014px;
    /* height: 774px; */
    /* border: 1px solid red; */
    padding: 10px;
    position: absolute;
    top: -380px;
}
/* 头部 */
.app-main{
    width: 980px;
    height: 620px;
    border: 0.5px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
}
.main-top{
    width: 100%;
    height: 56px;
    border-bottom: 0.5px solid #ccc;
    padding:0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-top div:nth-child(1){
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
}
.main-top div:nth-child(2){
    width: 231px;
    height: 32px;
    /* border: 1px solid red; */
    display: flex;
}
.main-top div:nth-child(2) input{
    display: inline-block;
    width: 198px;
    height: 32px;
    border: 0.5px solid #ccc;
    border-radius: 5px 0 0 5px;
    padding: 10px;
}
.main-top div:nth-child(2) input:focus {
  outline: none;
  border: 0.5px solid #409eff;
}
.main-top div:nth-child(2) input:hover{
    border: 0.5px solid #0c70f3;
}
.main-top div:nth-child(2) button{
    width: 32px;
    height: 32px;
    border: 0.5px solid #ccc;
    background-color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
.main-top div:nth-child(2) button:hover{
    border: 0.5px solid #0c70f3;
}
/* —————————————————————————————————————— */
.main-tab{
    width: 100%;
    height: 580px;
    padding: 24px;
    box-sizing: border-box;
    overflow: hidden;
}
.tab-layout{
    display: flex;
    min-height: calc(100% - 24px);
    width: 100%;
}
.tab-sidebar{
    width: 170px;
    padding: 20px 0;
    margin-right: 20px;
    position: relative;
}
.tab-sidebar::after{
    content: "";
    position: absolute;
    top: 16px;
    right: 0;
    width: 1px;
    height: calc(100% - 32px);
    /* background: #e8edf3; */
}
.tab-sidebar ul{
    list-style: none;
    margin: 0;
    padding: 0;
    width: 150px;
}
.tab-sidebar li{
    font-size: 14px;
    padding: 12px 22px;
    margin: 0 0 8px;
    border-radius: 8px;
    color: #8f9bb3;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    position: relative;
}
.tab-sidebar li:hover{
    color: #409eff;
}
.tab-sidebar li.active{
    color: #1f2d3d;
    font-weight: 600;
}
.tab-grid{
    display: grid;
    grid-template-columns: repeat(4, 190px);
    column-gap: 12px;
    row-gap: 10px;
    justify-content: start;
    width: 100%;
    box-sizing: border-box;
}
.process-card{
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 80px;
    padding: 10px 12px;
    border: 0.5px solid #e6e6e6;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    color: #333;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: pointer;
}
.process-card:hover{
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.14);
    border-color: rgba(64,158,255,0.25);
}
.process-card span:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    min-width: 52px;
    height: 52px;
    background-color: #1a73e8;
    color: #fff;
    border-radius: 12px;
    font-size: 12px;
    text-align: center;
    padding: 4px;
}
.process-card span{
    display: inline-block;
}
.process-card span:last-child{
    min-width: 0;
    flex: 1;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tag{
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
}
</style>
