const vscode = require("vscode");
const path = require('path');
const fs = require('fs');
const vueTemp = require('./template/vue-temp.js')

async function hover(document, position) {
  // 获取所在行的文本
  const line = document.lineAt(position).text; // 光标所在的行
  // 获取所在位置的单词
  const positionWord = document.getText(
    document.getWordRangeAtPosition(position)
  );
  const editor = vscode.window.activeTextEditor
  // 获取选中的文本
  const text = document.getText(editor.selection);
  // console.log("光标所在位置的单词是：", text);
  // console.log('当前位置：' , document.fileName, path.dirname(document.fileName))
  // 获取当前项目工作路径
  const projectPath = document.fileName.replace(/\\src\\.+$/,'')
  console.log(1, projectPath, projectPath + `\\node_modules\\yl-element-ui\\src\\components\\table-can\\src\\main-jsx.vue`)
  // 获取文件
  var data = fs.readFileSync(projectPath + `\\node_modules\\yl-element-ui\\src\\components\\table-can\\src\\main-jsx.vue`);
  let str = data.toString()
  str = str.slice(str.indexOf('export'))
  console.log(111, str.replace(/export\s+default/g,''))
  // let propJson = JSON.parse(str.replace(/export\s+default/g,''))
  // console.log("同步读取: " + propJson);

  // 获取prop

  // 生成文本

  // 显示hover
  // `* **名称**：${content.name}\n* **版本**：${content.version}\n* **许可协议**：${content.license}`
  // console.log(11, vueTemp.template)
  return new vscode.Hover(vueTemp.template());
  // let compPath = path.resolve(__dirname)

}

// registerHoverProvider的第一个参数数组表明此处理器的作用范围
const hoverDisposable = vscode.languages.registerHoverProvider(
  ["javascript", "vue", "js"],
  {
    // @ts-ignore
    provideHover: hover,
  }
);
module.exports = {
  hoverDisposable
}