export const contentTableConfig = {
  // 标题
  title: '商品列表',
  formItems: [
    { prop: 'name', label: '商品名', minWidth: '100' },
    { prop: 'oldPrice', label: '原价格', minWidth: '60' },
    { prop: 'newPrice', label: '现价格', minWidth: '60' },
    { prop: 'enable', label: '状态', minWidth: '80', slotName: 'status' },
    { prop: 'imgUrl', label: '图片', minwidth: '100', slotName: 'image' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '160',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '160',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示checkbox
  showSelectColumn: true
}
