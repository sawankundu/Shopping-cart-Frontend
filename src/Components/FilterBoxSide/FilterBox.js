import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import React from 'react';
import './filterBox.css';

export const FilterBox = ({options, value, selectToggle}) => {
  return (
    <>
        {/* <ToggleButtonGroup 
        value={value}
        onChange={selectToggle}
        className="ButtonGroupRoot"
    >
        {options.map(({label, id, value}) =><ToggleButton className='classesToggle' key={id} value={value}>{label}</ToggleButton> )}
    </ToggleButtonGroup> */}
    </>
    
  )
}
