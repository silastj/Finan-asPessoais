import React, { useEffect, useState } from 'react';
import * as C from './App.styles'

import { items } from './data/items'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import InfoArea from './components/InfoArea'

function App() {
  const [ list, setList] = useState(items)
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ filteredList, setFilteredList ] = useState<Item[]>([])

  // observando as variaveis state list, currentMonth para executar a filterListByMonth
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <h1>Sistema Financeiro</h1>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}/>
        <TableArea list={filteredList}/>
      </C.Body>
      <C.Footer>
        <p>Footer</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
