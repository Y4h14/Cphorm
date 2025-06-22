import { Hono } from 'hono';
import { handle } from 'hono/cloudflare';
import { createReport, getAllReport, getReport, updateReport, deleteReport } from './controllers/report_controllers.js';

const app = new Hono();

app.get('/z', (c) => c.json({ status: 'ok' }));

app.get('/api/reports', async (c) => {
    try {
        const reports = await getAllReport();
        return c.json(reports);
    } catch (err) {
        return c.json({ message: err.message }, 500);
    }
});

app.post('/api/reports', async (c) => {
    try {
        const body = await c.req.json();
        const report = await createReport(body);
        return c.json({ success: true, data: report }, 201);
    } catch (err) {
        return c.json({ success: false, error: err.message }, 400);
    }
});

app.get('/api/reports/:id', async (c) => {
    try {
        const report = await getReport(c.req.param('id'));
        return c.json({ success: true, data: report });
    } catch (err) {
        return c.json({ success: false, error: err.message }, 404);
    }
});

app.put('/api/reports/:id', async (c) => {
    try {
        const body = await c.req.json();
        const report = await updateReport(c.req.param('id'), body);
        return c.json({ success: true, data: report });
    } catch (err) {
        return c.json({ success: false, error: err.message }, 404);
    }
});

app.delete('/api/reports/:id', async (c) => {
    try {
        const report = await deleteReport(c.req.param('id'));
        return c.json({ success: true, data: report });
    } catch (err) {
        return c.json({ success: false, error: err.message }, 404);
    }
});

export default handle(app);
