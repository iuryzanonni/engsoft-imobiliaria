import React from 'react';
import {MenuItem, Select} from '@material-ui/core';

const Dropdown = ({ handleChange, value, neighborhoodList }) => {
    return <>
        <Select
            style={{ 
                width:"78%"
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={(event)=>handleChange(event.target.value)}
        >
            {neighborhoodList?.map((neighborhood, index)=>
                <MenuItem key={index} value={neighborhood.nomeBairro}>{neighborhood.nomeBairro}</MenuItem>
            )}
        </Select>
    </>
}

export default Dropdown;
