const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = 'D:\\vue3学习\\vue-vben';
const viewsDir = path.join(projectDir, 'src', 'views', 'pages', 'project');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (file.endsWith('.vue')) {
      results.push(filePath);
    }
  }
  return results;
}

function extractPart(content, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?</${tagName}>`, 'i');
  const match = content.match(regex);
  return match ? match[0] : '';
}

// 从模板中提取所有带style的元素，以元素内容为key
function extractStyledElements(template) {
  const elements = {};
  // 匹配带 style= 或 :style= 的元素
  const regex = /<([a-zA-Z][a-zA-Z0-9-]*)[^>]*?(?:style|:style)=["'][^>]*?>/g;
  let match;
  while ((match = regex.exec(template)) !== null) {
    const fullTag = match[0];
    // 用标签名+class作为key来匹配
    const classMatch = fullTag.match(/class=["']([^"']*)["']/);
    const key = match[1] + (classMatch ? '.' + classMatch[1] : '');
    elements[key] = fullTag;
  }
  return elements;
}

// 把原始元素的style属性合并到当前元素
function mergeStyle(origTag, curTag) {
  // 提取原始的静态style
  const origStyleMatch = origTag.match(/\sstyle=["']([^"']*)["']/);
  // 提取原始的动态:style
  const origDynamicStyleMatch = origTag.match(/\s:style=(["'][^"']*["']|\{[\s\S]*?\})/);
  
  let result = curTag;
  
  // 如果当前没有静态style，而原始有，就添加
  if (origStyleMatch && !/\sstyle=["']/.test(curTag)) {
    // 在标签名后插入style
    result = result.replace(/^<([a-zA-Z][a-zA-Z0-9-]*)/, `<$1 style="${origStyleMatch[1]}"`);
  }
  
  // 如果当前没有动态:style，而原始有，就添加
  if (origDynamicStyleMatch && !/\s:style=/.test(curTag)) {
    // 在标签名后插入:style
    const dynamicStyle = origDynamicStyleMatch[0].trim();
    result = result.replace(/^<([a-zA-Z][a-zA-Z0-9-]*)/, `<$1 ${dynamicStyle}`);
  }
  
  return result;
}

const files = getFiles(viewsDir);
let processed = 0;

for (const filePath of files) {
  const relPath = path.relative(projectDir, filePath).replace(/\\/g, '/');
  
  try {
    // 获取原始版本
    const original = execSync(`git show HEAD:${relPath}`, { 
      cwd: projectDir, 
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024
    });
    
    // 获取当前版本
    const current = fs.readFileSync(filePath, 'utf8');
    
    // 提取模板部分
    const origTemplate = extractPart(original, 'template');
    let curTemplate = extractPart(current, 'template');
    const curScript = extractPart(current, 'script');
    const curStyle = extractPart(current, 'style');
    
    if (!origTemplate || !curTemplate || !curScript) {
      console.log(`跳过(缺少部分): ${path.basename(filePath)}`);
      continue;
    }
    
    // 提取原始模板中带style的元素
    const origElements = extractStyledElements(origTemplate);
    
    // 提取当前模板中对应的元素
    const curElements = extractStyledElements(curTemplate);
    
    let mergedCount = 0;
    
    // 对于原始中有style但当前中没有的元素，进行合并
    for (const key in origElements) {
      const origTag = origElements[key];
      // 在当前模板中找到对应的元素（用标签名+class匹配）
      const tagName = key.split('.')[0];
      const className = key.split('.')[1] || '';
      
      // 构建匹配当前元素的正则
      let curRegex;
      if (className) {
        curRegex = new RegExp(`<${tagName}[^>]*?class=["']${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*?>`, 'g');
      } else {
        curRegex = new RegExp(`<${tagName}[^>]*?>`, 'g');
      }
      
      const matches = curTemplate.match(curRegex);
      if (matches) {
        for (const curTag of matches) {
          // 如果当前元素没有style，而原始有，就合并
          if (!/\sstyle=["']/.test(curTag) && !/\s:style=/.test(curTag)) {
            const mergedTag = mergeStyle(origTag, curTag);
            curTemplate = curTemplate.replace(curTag, mergedTag);
            mergedCount++;
          }
        }
      }
    }
    
    // 合并成完整文件
    const merged = curTemplate + '\n\n' + curScript + '\n\n' + (curStyle || '') + '\n';
    fs.writeFileSync(filePath, merged, 'utf8');
    console.log(`已处理: ${path.basename(filePath)} (合并 ${mergedCount} 个样式)`);
    processed++;
  } catch (e) {
    console.log(`错误: ${path.basename(filePath)} - ${e.message}`);
  }
}

console.log(`\n共处理 ${processed} 个文件`);
