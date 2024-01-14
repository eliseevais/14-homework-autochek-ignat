import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 DONE - описать типы AffairPriorityType, AffairType
* 2 DONE - указать нужный тип для defaultAffairs
* 3 DONE - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 DONE - выполнить пункт 3 для функции deleteAffair
* 5 DONE - указать нужный тип в useState с affairs
* 6 DONE - дописать тип и логику функции deleteAffairCallback
* 7 DONE - в файле Affairs.tsx дописать типизацию пропсов
* 8 DONE - в файле Affairs.tsx дописать логику функций setAll, setHigh,
*  setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
  if (filter === 'all') {
    return affairs
  } else if (filter === 'high') {
    return affairs.filter(affair => affair.priority === 'high');
  } else if (filter === 'middle') {
    return affairs.filter(affair => affair.priority === 'middle')
  } else if (filter === 'low') {
    return affairs.filter(affair => affair.priority === 'low')
  }
  return affairs // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
  let affairsCopy = affairs;
  let filteredAffairs = affairsCopy.filter(affair => affair._id !== _id)
  affairs = filteredAffairs;
  console.log(affairs)
  return affairs
  // need to fix
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id))
  }

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
