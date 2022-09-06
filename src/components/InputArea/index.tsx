import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  onAdd: (item: Item) => void
}

const InputArea = ({onAdd}: Props) => {

const [categoria, SetCategoria] = useState('fuel')
const [title, SetTitle] = useState('')
const [ money, SetMoney] = useState('')

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2022, 9,27),
      category: categoria,
      title: title,
      value: parseInt(money)
    }
    onAdd(newItem)
  }

  return (
    <C.Container>
      <div>
        <label htmlFor="data">Data</label>
        <input type="text" id='data' />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(event) => SetTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="money">Money:</label>
        <input type="text" id='money' value={money} onChange={(event) => SetMoney(event.target.value)} />
      </div>
      <div>
        <label htmlFor="categoria">Categoria:</label>
        <select name="categoria" id="categoria" value={categoria} onChange={({target}) => SetCategoria(target.value)}>
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
          <option value="fuel">Combustível</option>
        </select>
      </div>
      {/* <div>
        <label htmlFor="">Categoria:</label>
        <input type="text" value={categoria} onChange={(event) => SetCategoria(event.target.value)} />
      </div> */}
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  )
}

export default InputArea