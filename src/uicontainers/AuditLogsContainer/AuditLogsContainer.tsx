import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import AuditLogs from 'components/AuditLogs';

const AuditLogsContainer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginLeft: '1%',
        padding: '2%',
        bgcolor: 'text.disabled',
        color: 'text.primary',
      }}
    >
      <Typography variant="h4" gutterBottom component="div" color={'text.secondary'}>
        Audit Logs
      </Typography>
      <Divider />
      <AuditLogs />
    </Box>
  );
};

export default AuditLogsContainer;
