import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import {useAppSelector} from 'store/hooks';
import {selectAuditLogs} from 'store/AuditLogs/selectors';

const AuditLogs = () => {
    const auditLogs = useAppSelector(selectAuditLogs);
    return (
        <List>
            {auditLogs.map((log, idx) => (
                <ListItem
                    key={idx}
                    disableGutters
                >
                    <ListItemText secondary={`${log.log}`} />
                </ListItem>
            ))}
        </List>
    );
};

export default AuditLogs;