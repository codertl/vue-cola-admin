import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请输入上级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名',
      placeholder: '请输入领导名称'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '0 40px 0 0' },
  labelWidth: '80px'
}
