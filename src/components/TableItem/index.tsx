import React from 'react'
import * as C from './styles'
import {Item} from '../../types/Item'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColum>...</C.TableColum>
      <C.TableColum>{item.category}</C.TableColum>
      <C.TableColum>{item.title}</C.TableColum>
      <C.TableColum>{item.value}</C.TableColum>
    </C.TableLine>
  )
}
