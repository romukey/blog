export interface QiitaItem {
  id: string
  title: string
  description?: string
  likesCount: number
}

export interface S {
  items: QiitaItem[]
}

export interface G {
  items: QiitaItem
}

export interface RG {
  'qiita-items/items': G['items']
}

export interface M {
  setItems: { items: QiitaItem[] }
}

export interface RM {
  'qiita-items/setItems': M['setItems']
}

export interface A {
  fetch: void
}

export interface RA {
  'qiita-items/fetch': A['fetch']
}
