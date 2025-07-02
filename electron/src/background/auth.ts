import Store from 'electron-store';
import jwt from 'jsonwebtoken';

const store = new Store<{ token?: string; userId?: number }>();
const SECRET = process.env['JWT_SECRET'] || 'secret';

export function saveToken(token: string) {
    store.set('token', token);
    try {
        const payload = jwt.verify(token, SECRET) as any;
        if (payload && payload.sub) {
            store.set('userId', Number(payload.sub));
        }
    } catch {
        // ignore invalid token
    }
}

export function getToken(): string | undefined {
    return store.get('token');
}

export function getUserId(): number | undefined {
    return store.get('userId');
}

export function setUserId(id: number) {
    store.set('userId', id);
}
