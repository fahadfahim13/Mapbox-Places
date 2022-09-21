import React from 'react';
import { TextField } from '@mui/material';

import {Props} from './types';

const InputField = (props: Props) => {
    const {required=false, name='default', id='Default', type='text',
        label='Default', onChange, value='',
        multiline=false, maxRows=1, width='100%'} = props
    return (
        <TextField
            required={required}
            id={id}
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            multiline={multiline}
            maxRows={maxRows}
            style={{ width: width}}
        />
    );
};

export default InputField;