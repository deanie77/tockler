import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function DepartmentDashboard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/departments/current/stats')
            .then((r) => r.json())
            .then(setData)
            .catch(() => {});
    }, []);

    return (
        <Box p={4}>
            <Heading size="md" mb={4}>
                Department Dashboard
            </Heading>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Box>
    );
}
