import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
  X,
  TagSimple,
  CalendarBlank,
  CaretRight,
  CaretLeft,
  MagnifyingGlass,
} from '@phosphor-icons/react'

import { Main } from './style'

export enum enumIcons {
  ARROW_UP = 'arrowUp',
  ARROW_DOWN = 'arrowDown',
  DOLLAR_SIGN = 'dollarSign',
  CLOSE = 'close',
  TAG = 'tag',
  CALENDAR = 'calendar',
  ARROW_RIGHT = 'arrowRight',
  ARROW_LEFT = 'arrowLeft',
  MAGNIFYING_GLASS = 'MagnifyingGlass',
}

interface IIcon {
  iconName: enumIcons
  iconColor: string
  iconSize: number
}

export default function Icon({ iconName, iconColor, iconSize }: IIcon) {
  switch (iconName) {
    case 'arrowUp':
      return (
        <Main color={iconColor}>
          <ArrowCircleUp size={iconSize} />
        </Main>
      )
    case 'arrowDown':
      return (
        <Main color={iconColor}>
          <ArrowCircleDown size={iconSize} />
        </Main>
      )
    case 'dollarSign':
      return (
        <Main color={iconColor}>
          <CurrencyDollar size={iconSize} />
        </Main>
      )
    case 'close':
      return (
        <Main color={iconColor}>
          <X size={iconSize} />
        </Main>
      )
    case 'tag':
      return (
        <Main color={iconColor}>
          <TagSimple size={iconSize} />
        </Main>
      )
    case 'calendar':
      return (
        <Main color={iconColor}>
          <CalendarBlank size={iconSize} />
        </Main>
      )
    case 'arrowRight':
      return (
        <Main color={iconColor}>
          <CaretRight size={iconSize} />
        </Main>
      )
    case 'arrowLeft':
      return (
        <Main color={iconColor}>
          <CaretLeft size={iconSize} />
        </Main>
      )
    case 'MagnifyingGlass':
      return (
        <Main color={iconColor}>
          <MagnifyingGlass size={iconSize} />
        </Main>
      )
  }

  return <></>
}
