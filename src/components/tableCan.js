/*
 * @FilePath: \xyl-vsc\src\components\tableCan.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  props: [
    { key: 'show-check', desc: '显示勾选框', type: 'boolean' },
    { key: 'show-page', desc: '显示分页', type: 'boolean' },
    {
      key: 'columns', desc: '列的描述', type: 'Array', children: [
        { key: 'prop', desc: '属性关键字', type: 'String' },
        { key: 'label', desc: '属性描述', type: 'String' },
      ]
    },
  ]
}