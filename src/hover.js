const vscode = require("vscode");
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
  console.log("光标所在位置的单词是：", text);
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