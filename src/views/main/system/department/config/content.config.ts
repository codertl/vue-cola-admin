export const contentTableConfig = {
  // 标题
  title: '部门列表',
  formItems: [
    { prop: 'name', label: '部门名', minWidth: '100' },
    { prop: 'leader', label: '领导', minWidth: '100' },
    { prop: 'parentId', label: '上级部门', minWidth: '120' },
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
