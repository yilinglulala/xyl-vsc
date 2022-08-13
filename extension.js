// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "test1" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "test1.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from 666!");
    }
  );
  let disposable1 = vscode.commands.registerCommand(
    "test1.helloWorld1",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from1 !");
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable1);
  async function hover(document, position) {
    const line = document.lineAt(position).text; // 光标所在的行
    // getWordRangeAtPosition获取光标所在单词的行列号范围；getText获取指定范围的文本
    const positionWord = document.getText(
      document.getWordRangeAtPosition(position)
    );

    console.log("光标所在位置的单词是：", line, positionWord);
  }

  // registerHoverProvider的第一个参数数组表明此处理器的作用范围
  const hoverDisposable = vscode.languages.registerHoverProvider(
    ["javascript", "vue", "js"],
    {
      // @ts-ignore
      provideHover: hover,
    }
  );

  context.subscriptions.push(hoverDisposable);

  let command = vscode.commands.registerTextEditorCommand(
    "extension.selection",
    function (textEditor) {
      const text = textEditor.document.getText(textEditor.selection);
	  vscode.window.showInformationMessage(text);
      console.log("选中的文本是:", text);
    }
  );

  context.subscriptions.push(command);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
