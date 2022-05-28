import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名',
      placeholder: '请输入商品名名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价格',
      placeholder: '请输入现价格'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请输入上级部门',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '0 40px 0 0' },
  labelWidth: '80px'
}
