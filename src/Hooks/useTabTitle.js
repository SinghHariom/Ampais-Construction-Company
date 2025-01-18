import { useEffect, useState } from 'react';

function useTabTitle(pageName) {
    const [title , setTitle] = useState('Ampais Construction');
    
    useEffect(()=>{
        setTitle(`${pageName} - ${title}`);
    },[]);

    window.document.title = title;
}

export default useTabTitle;