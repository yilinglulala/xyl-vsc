const tableCan = require('../components/tableCan')

let template = (data) => {
  let prop = `
  ## prop属性

  | 属性名    | 类型    | 说明           ||
  | --------- | ------- | -------------- |-------------- |
  | showCheck | boolean | 是否显示勾选框 |
  ${tableCan.props.map(item => {
    let row = `| ${item.key} | ${item.type} | ${item.desc} ||`
    let childRow = ''
    if (item.children) {
      childRow = item.children.map(child => {
        return `| | ${child.key} | ${child.type} | ${child.desc} |`
      }).join('\n')
    }
    return row + (childRow ? ('\n' + childRow) : '')
  }).join('\n')}
  
  `
  let event = `
  ## <div style="color:#f66"> event 事件</div>

  `
  // 
  return prop + event
}
module.exports = {
  template
}