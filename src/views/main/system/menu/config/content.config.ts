export const contentTableConfig = {
  // 标题
  title: '菜单列表',
  formItems: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '160' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '120' },
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
  showIndexColumn: false,
  // 是否显示checkbox
  showSelectColumn: false,
  // 显示树形结构
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  // 是否显示分页器
  showPagination: false
}
