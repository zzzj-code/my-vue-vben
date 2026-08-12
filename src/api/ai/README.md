# AI 智能助手模块 API 说明

## 模块概述
AI智能助手模块，包含对话聊天、图片生成、音乐生成、思维导图、写作、知识库、模型管理、工作流等功能。

## API 文件与页面对应关系

### 对话聊天
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/chat/conversation/index.js` | `views/pages/ai/chat/chat.vue` | AI对话 | ❌ | 对话会话的创建、查询、删除 |
| `ai/chat/message/index.js` | `views/pages/ai/chat/chat.vue` | AI对话消息 | ❌ | 对话消息的发送、查询、删除 |

### 图片生成
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/image/index.js` | `views/pages/ai/image/image.vue` | 图片生成 | ❌ | AI图片生成、查询、删除 |

### 音乐生成
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/music/index.js` | `views/pages/ai/music/music.vue` | 音乐生成 | ❌ | AI音乐生成、查询、删除 |

### 思维导图
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/mindmap/index.js` | `views/pages/ai/mindmap/mindmap.vue` | 思维导图 | ❌ | AI思维导图生成、查询、删除 |

### 写作助手
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/write/index.js` | `views/pages/ai/write/write.vue` | 写作助手 | ❌ | AI写作、内容生成、查询 |

### 知识库
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/knowledge/knowledge/index.js` | `views/pages/ai/knowledge/knowledge-list.vue` | 知识库管理 | ❌ | 知识库的增删改查 |
| `ai/knowledge/document/index.js` | `views/pages/ai/knowledge/document-list.vue` | 文档管理 | ❌ | 知识库文档的上传、查询、删除 |
| `ai/knowledge/segment/index.js` | `views/pages/ai/knowledge/segment-list.vue` | 分段管理 | ❌ | 文档分段的查询、编辑 |

### 模型管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/model/model/index.js` | `views/pages/ai/model/model-list.vue` | 模型管理 | ❌ | AI模型的增删改查 |
| `ai/model/apiKey/index.js` | `views/pages/ai/model/api-key-list.vue` | API密钥管理 | ❌ | API密钥的增删改查 |
| `ai/model/chatRole/index.js` | `views/pages/ai/model/chat-role-list.vue` | 聊天角色 | ❌ | 聊天角色的增删改查 |
| `ai/model/tool/index.js` | `views/pages/ai/model/tool-list.vue` | 工具管理 | ❌ | AI工具的增删改查 |

### 工作流
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `ai/workflow/index.js` | `views/pages/ai/workflow/workflow-list.vue` | 工作流管理 | ❌ | AI工作流的增删改查、执行 |

## 接口路径前缀
所有AI模块接口前缀：`/admin-api/ai`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
