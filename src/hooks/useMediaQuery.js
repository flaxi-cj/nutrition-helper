import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {

    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const matchQueryList = window.matchMedia(query);
        function handleChange(e) {
            setMatches(e.matches);
        }
        matchQueryList.addEventListener("change", handleChange);
        return () => {
            matchQueryList.removeEventListener("change", handleChange);
        };
    }, [query]);
    return matches;
}

export default useMediaQuery;