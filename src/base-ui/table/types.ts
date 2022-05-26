export interface IProp {
  prop?: string
  label: string
  minWidth?: string
  slotName?: string
}

export interface IContentTableConfig {
  title?: string
  formItems: IProp[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
