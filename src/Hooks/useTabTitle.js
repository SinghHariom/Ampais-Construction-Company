import { useEffect, useState } from 'react';

function useTabTitle(pageName) {
    const [title, setTitle] = useState('Ampais Construction');

    useEffect(() => {
        setTitle(prevTitle => `${pageName} - ${prevTitle}`);
    }, [pageName]);

    useEffect(() => {
        window.document.title = title;
    }, [title]);
}

export default useTabTitle;
