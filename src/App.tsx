import React, { useEffect, useState } from 'react';
import * as C from './App.styles'

import { items } from './data/items'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import {TableArea} from './components/TableArea/index'

function App() {
  const [ list, setList] = useState(items)
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ filteredList, setFilteredList ] = useState<Item[]>([])

  // observando as variaveis
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  {console.log('list',list)}
  {console.log('filtro',filteredList)}
  {console.log('currentMonth',currentMonth)}
  
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
        <TableArea list={filteredList}/>
      </C.Body>
      <C.Footer>
        <p>Footer</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
