type formType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  field: string
  type: formType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  options?: { title: string; value: string | number }[]
  // 针对特殊属性
  otherOptions?: any
  isHidden?: boolean
}
export interface IColLayout {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
  span?: number
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: IColLayout
}
