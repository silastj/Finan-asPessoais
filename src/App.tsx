import React, { useEffect, useState } from 'react';
import * as C from './App.styles'

import { items } from './data/items'
import { Item } from './types/Item'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import {TableArea} from './components/TableArea/index'

function App() {
  const [ list, setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [ currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  // observando as variaveis
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  
  return (
    <C.Container>
      <C.Header>
        <h1>Sistema Financeiro</h1>
      </C.Header>
      <C.Body>
        <h2>Body</h2>
        {list && list.map((li, index) => (
          <p key={index}>{li.title}</p>
        ))} 
        {currentMonth}
        <TableArea list={list}/>
      </C.Body>
      <C.Footer>
        <p>Footer</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
