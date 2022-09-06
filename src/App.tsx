import React, { useEffect, useState } from 'react';
import * as C from './App.styles'

import { items } from './data/items'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import InfoArea from './components/InfoArea'
import InputArea from './components/InputArea'

function App() {
  const [ list, setList] = useState(items)
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ filteredList, setFilteredList ] = useState<Item[]>([])
  const [ income, setIncome] = useState(0)
  const [ expense, setExpense] = useState(0)

  // observando as variaveis state list, currentMonth para executar a filterListByMonth
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0
    
    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      }else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  },[filteredList])

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    console.log(newList)
    newList.push(item)
    setList(newList)
  }


  return (
    <C.Container>
      <C.Header>
        <h1>Sistema Financeiro</h1>
      </C.Header>
      <C.Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}  
          expense={expense}
        />
        <InputArea
          onAdd={handleAddItem}
        />
        <TableArea list={filteredList}/>
      </C.Body>
      <C.Footer>
        <p>Footer</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
