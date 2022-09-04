import React from 'react'
import * as C from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
}

const InfoArea = ({currentMonth, onMonthChange}: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1) // crio uma nova data com o mes e ano que passei acima, e coloco um dia ( 1 ) pra deixar
    currentDate.setMonth( currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1) // crio uma nova data com o mes e ano que passei acima, e coloco um dia ( 1 ) pra deixar
    currentDate.setMonth( currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }


  return(
      <C.Container>
        <C.MonthArea>
          <C.MontArrow onClick={handlePrevMonth}>⬅️</C.MontArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
          <C.MontArrow onClick={handleNextMonth}>➡️</C.MontArrow>
        </C.MonthArea>
        <C.ResumeArea>

        </C.ResumeArea>
      </C.Container>
  )
}

export default InfoArea