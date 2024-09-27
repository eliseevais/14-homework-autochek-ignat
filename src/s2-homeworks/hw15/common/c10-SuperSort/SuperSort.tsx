import React from 'react';
import downIcon from '../img/downIcon.png';
import upIcon from '../img/upIcon.png';
import noneIcon from '../img/noneIcon.png'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

  // if (sort === up) {
  //   return down
  // }
  // if (sort === down) {
  //   return ''
  // }
  //
  // return up // исправить

  if (sort === down) {
    return up
  }
  if (sort === up) {
    return ''
  }
  if (sort === '') {
    return down
  }

  return down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}

      {/*{icon} /!*а это убрать*!/*/}


      <img
        id={id + '-icon-' + sort}
        src={icon}
        style={{height: '18px', margin: '4px'}}
      />

        </span>
  )
}

export default SuperSort
