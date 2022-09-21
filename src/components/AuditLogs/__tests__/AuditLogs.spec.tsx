import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import AuditLogs from 'components/AuditLogs';

const renderAuditLogs = (): RenderResult => {
    render(
        <Provider store={store}>
            <AuditLogs/>
        </Provider>
    );
};

describe('Audit Logs Snapshot', () => {
    test('Renders Audit logs', () => {
        renderAuditLogs();
        expect(screen).toMatchSnapshot();
    });
})