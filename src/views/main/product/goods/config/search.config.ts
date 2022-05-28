import { IForm } from '@/base-ui/form/types'
export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品称',
      placeholder: '请输入商品名'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
