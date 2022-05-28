import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '权限名',
      placeholder: '请输入权限名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '0 40px 0 0' },
  labelWidth: '80px'
}
