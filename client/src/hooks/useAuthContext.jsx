import { useState, useEffect, useMemo } from 'react';

const useAuthContext = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const checkUserAuthentication = async () => {
            try {
                const response = await fetch('http://localhost:3000', {
                    credentials: 'include',
                });
                const data = await response.json();
                console.log('form useAuthcontext', data);
                if (response.ok) {
                    const data = await response.json();
                    console.log('useAuthContext USER:', data.user);
                    setUser(data.user);
                } else if (response.status === 401) {
                    setUser(null);
                    console.log('User not authenticated');
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (error) {
                console.error('Error checking user authentication:', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkUserAuthentication();
    }, []);

    // const memoizedObject = useMemo(() => ({ user, isLoading }), [user, isLoading]);
    return { user, isLoading };
};

export default useAuthContext;