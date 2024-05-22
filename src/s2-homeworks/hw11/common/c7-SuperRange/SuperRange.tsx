import React from 'react'
import {Slider, SliderProps} from '@mui/material'

// передать в пропсы min, max, value, onChange
const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        color: '#00CC22',
        width: '148px',
        height: '4px',
        marginRight: '14px'
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
