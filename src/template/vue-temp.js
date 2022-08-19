let template = (data)=>{
  let prop = `
  ## prop属性

  | 属性名    | 类型    | 说明           |
  | --------- | ------- | -------------- |
  | showCheck | boolean | 是否显示勾选框 |
  
  `
  // ${data.props.map(v=>`| prop | boolean | 是否显示勾选框 |`)}.join('\n')
  return prop
}
module.exports = {
  template
}