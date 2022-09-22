import React, { useState } from 'react';

import {Snackbar, Alert as AlertMaterial} from '@mui/material';
import {Props} from './types';

const Alert = (props: Props) => {
    const {open, vertical="top", horizontal="center", message, severity} = props;
    const [openAlert, setOpenAlert] = useState(open);
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openAlert}
            key={vertical + horizontal}
        >
            <AlertMaterial onClose={() => setOpenAlert(false)} severity={severity}>{message}</AlertMaterial>
        </Snackbar>
    );
};

export default Alert;