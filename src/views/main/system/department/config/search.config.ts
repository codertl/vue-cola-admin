import { IForm } from '@/base-ui/form/types'
export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名',
      placeholder: '请输入领导名'
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
