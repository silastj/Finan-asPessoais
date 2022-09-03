// LISTA DE FUNÇÃO BASEADO EM DATA

import { Item } from "../types/Item";

// Mês e ano atual
export const getCurrentMonth = () => {
  let now = new Date();
  return`${now.getFullYear()}-${now.getMonth() + 1}`
}

// Verificando se o mês atual é o mesmo que está no filter
export const filterListByMonth = (list: Item[], date:string): Item[] => {
  let newList: Item[] = []
  let [year, month] = date.split('-')
  for(let i in list){
    console.log('list',list)
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth()) === parseInt(month)
    ){
      newList.push(list[i])
    }
  }

  return newList
}