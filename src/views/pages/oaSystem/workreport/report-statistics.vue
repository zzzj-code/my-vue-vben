<template>
    <div class="page-wrapper">
        <div class="app">
            <div class="app-left">
                <div class="left-title">
                    组织机构
                </div>
                <div class="left-main">
                    <input type="text" placeholder="🔍请输入部门名称">
                    <div class="main-tab">
                        <ul class="org-tree">
                            <li v-for="node in treeData" :key="node.id" class="tree-node" :class="{open: node.open}">
                                <span class="tree-label" @click="toggleNode(node)">{{ node.label }}</span>
                                <ul v-show="node.open" v-if="node.children && node.children.length">
                                    <li v-for="child in node.children" :key="child.id" class="tree-node" :class="{open: child.open}">
                                        <span class="tree-label" @click="toggleNode(child)">{{ child.label }}</span>
                                        <ul v-show="child.open" v-if="child.children && child.children.length">
                                            <li v-for="leaf in child.children" :key="leaf.id" class="tree-leaf">{{ leaf.label }}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="app-right">
                <div class="right-top">
                    <div class="report-tabs">
                        <button
                            v-for="tab in tabs"
                            :key="tab.value"
                            type="button"
                            class="tab"
                            :class="{ active: selectedTab === tab.value }"
                            @click="selectTab(tab.value)"
                        >
                            {{ tab.label }}
                        </button>
                    </div>
                    <div class="report-range">
                        <span class="range-label">统计周期：</span>
                        <div class="range-value">
                            <input type="text" v-model="rangeStart" class="range-input" />
                            <span class="range-sep">—</span>
                            <input type="text" v-model="rangeEnd" class="range-input" />
                            <span class="range-icon">📅</span>
                        </div>
                    </div>
                </div>
                <div class="right-main">
                    <div class="main-title">日报填写统计</div>
                    <div class="main-a">请在左侧选择部门</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { label: '日报', value: 'day' },
        { label: '周报', value: 'week' },
        { label: '月报', value: 'month' }
      ],
      selectedTab: 'day',
      rangeStart: '2026-07-01',
      rangeEnd: '2026-07-25',
      treeData: [
        {
          id: 'root1',
          label: '宇擎源码1',
          open: true,
          children: [
            {
              id: 'shenzhen',
              label: '深圳总公司',
              open: true,
              children: [
                { id: 'rd', label: '研发部门' },
                { id: 'test', label: '测试' }
              ]
            },
            {
              id: 'changsha',
              label: '长沙分公司',
              open: true,
              children: [
                { id: 'market', label: '市场部门' },
                { id: 'finance', label: '财务部门' }
              ]
            },
            {
              id: 'jinan',
              label: '济南研发分公司',
              open: true,
              children: [
                { id: 'jinan-rd', label: '济南研发部' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open
      }
    },
    selectTab(value) {
      this.selectedTab = value
    }
  }
}
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
  height: 760px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
}
.app-left{
    width: 220px;
    height: 580px;
    /* border: 1px solid red;  */
    background-color: #fff;
    border-radius: 10px;
}
.left-title{
    width: 100%;
    height: 36px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
}
.left-main{
    width: 100%;
    height: 544px;
    padding: 10px;
}
.left-main input{
    width: 194px;
    height: 32px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
}
.left-main input:hover{
    border: 1px solid #48e5fa;
}
.left-main input:focus{
    outline: none;
    border: 1px solid #48e5fa;
}
.main-tab{
    width: 194px;
    margin-top: 12px;
}
.org-tree,
.org-tree ul{
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.org-tree .tree-node{
    padding-left: 8px;
}
.org-tree .tree-node > .tree-label,
.org-tree .tree-leaf{
    display: flex;
    align-items: center;
    height: 34px;
    color: #333;
    font-size: 14px;
}
.org-tree .tree-node > .tree-label{
    font-weight: 600;
}
.org-tree .tree-node.open > .tree-label::before{
    content: '▾';
    display: inline-block;
    width: 18px;
    text-align: center;
    margin-right: 6px;
    color: #8c8c8c;
}
.org-tree .tree-node:not(.open) > .tree-label::before{
    content: '▸';
    display: inline-block;
    width: 18px;
    text-align: center;
    margin-right: 6px;
    color: #8c8c8c;
}
.org-tree .tree-leaf{
    padding-left: 30px;
    color: #666;
}

/*  */

.app-right{
    width: 802px;
    height: 500px;
    /* border: 1px solid red; */
    margin-left: 5px;
}
.right-top{
    width: 100%;
    height: 56px;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
}
.report-tabs{
    display: inline-flex;
    align-items: center;
    background: #f5f7fa;
    border-radius: 8px;
    padding: 4px;
}
.tab{
    min-width: 72px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #6f7b8b;
    font-size: 14px;
    cursor: pointer;
    padding: 0 16px;
    margin: 0 2px;
}
.tab.active{
    background: #fff;
    color: #1f2d3d;
    box-shadow: 0 4px 12px rgba(31, 45, 61, 0.08);
}
.report-range{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #6f7b8b;
}
.range-label{
    margin-right: 12px;
}
.range-value{
    display: flex;
    align-items: center;
    background: #f5f7fa;
    border: 1px solid #e5e9f2;
    border-radius: 999px;
    padding: 6px 10px;
    color: #1f2d3d;
    justify-content: center;
}
.range-value span,
.range-value .range-input{
    display: inline-block;
}
.range-input{
    width: 96px;
    height: 28px;
    border: none;
    background: transparent;
    color: #1f2d3d;
    font-size: 14px;
    outline: none;
}
.range-input::placeholder{
    color: #a0a9b8;
}
.range-sep{
    margin: 0 8px;
    color: #6f7b8b;
}
.range-icon{
    margin-left: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 6px rgba(31, 45, 61, 0.08);
    font-size: 14px;
}
.right-main{
    width: 100%;
    height: 319px;
    background-color: #fff;
    border-radius: 10px;
}
.main-title{
    width: 100%;
    height: 38px;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
}
.main-a{
    width: 100%;
    height: 281px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #ccc;
}
</style>