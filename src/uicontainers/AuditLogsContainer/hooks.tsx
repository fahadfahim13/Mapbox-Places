import { useAppSelector } from 'store/hooks';
import { selectAuditLogs } from 'store/AuditLogs/selectors';

const useAuditLogs = () => {
  const auditLogs = useAppSelector(selectAuditLogs);
  const generateAuditLog = () => {
    if (auditLogs.length === 0) {
      return `Created by User on ${new Date().toLocaleString('en-US')}`;
    }
    return `Updated by User on ${new Date().toLocaleString('en-US')}`;
  };
  return { generateAuditLog };
};

export default useAuditLogs;
