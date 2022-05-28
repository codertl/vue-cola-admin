import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '分类名',
      placeholder: '请输入分类名称'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '0 40px 0 0' },
  labelWidth: '80px'
}
