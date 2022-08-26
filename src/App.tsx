import React, { useEffect, useState } from 'react';
import * as C from './App.styles'

import { Item } from './types/item'
import { Category } from './types/Category'
import { Items } from './data/items'
import { Categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {
  const [ list, setList] = useState<Item[]>(Items)
  const [filteredList, setFilteredList] = useState<Item[]>()
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
          <p>{li.title}</p>
        ))}
        {currentMonth}
      </C.Body>
      <C.Footer>
        <p>Footer</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
