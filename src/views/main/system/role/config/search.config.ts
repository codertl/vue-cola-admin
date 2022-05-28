import { IForm } from '@/base-ui/form/types'
export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
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
    },
    {
      field: 'createAt',
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
