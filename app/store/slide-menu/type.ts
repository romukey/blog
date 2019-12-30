export interface S {
  isOpened: Boolean
}

export interface G {
  isOpened: Boolean
}

export interface RG {
  'slide-menu/isOpened': G['isOpened']
}

export interface M {
  open: void
  close: void
}

export interface RM {
  'slide-menu/open': M['open']
  'slide-menu/close': M['close']
}

export interface A {}

export interface RA {}
