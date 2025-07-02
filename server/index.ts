import express from 'express';

const app = express();
app.use(express.json());

// Dummy middlewares for auth & roles
function requireRole(role: string) {
    return (req: any, res: any, next: any) => {
        const user = (req as any).user || {};
        if (user.role !== role) {
            return res.status(403).send('Forbidden');
        }
        next();
    };
}

app.get('/api/users/:id/summary', (req, res) => {
    res.json({ id: req.params.id, summary: {} });
});

app.get('/api/departments/:dept/stats', requireRole('head'), (req, res) => {
    res.json({ department: req.params.dept, stats: {} });
});

export default app;
