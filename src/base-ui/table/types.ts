export interface IProp {
  prop?: string
  label: string
  minWidth?: string
  slotName?: string
}

export interface IContentTableConfig {
  title?: string
  propList: IProp[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
