import { dbClient } from '../drizzle/dbClient';
import { getToken } from './auth';

const SYNC_URL = process.env['SYNC_URL'] || 'https://example.com';

export async function uploadTrackItems() {
    const token = getToken();
    if (!token) return;
    const items = await dbClient.findAllFromLastHoursDb(24);
    await fetch(`${SYNC_URL}/api/track-items`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
    });
}

export async function pullUpdates() {
    const token = getToken();
    if (!token) return;
    const res = await fetch(`${SYNC_URL}/api/updates`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
        const updates = await res.json();
        // handle updates - placeholder
        console.debug('Received updates', updates);
    }
}
