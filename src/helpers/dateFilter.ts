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
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth()) === parseInt(month)
    ){
      newList.push(list[i])
    }
  }
  return newList
}

// FORMATAR UMA DATA
export const formatDate = (date: Date): string => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
} 
// função para incluir o zero quando a data for inferior que 10
const addZeroToDate = (dateDay: number): string => dateDay < 10 ? `0${dateDay}` : `${dateDay}`

//funcção para formata o mês
export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month) - 1]} de ${year}`
}