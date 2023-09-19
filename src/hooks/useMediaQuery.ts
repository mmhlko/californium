import { useEffect, useMemo, useState } from "react";

function useMediaQuery(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);

        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
}

export function useMediaQueries() {
    const xs = useMediaQuery("(max-width: 480px)");
    const sm = useMediaQuery("(max-width: 767px)");
    const md = useMediaQuery("(max-width: 992px)");
    const lg = useMediaQuery("(max-width: 1200px)");

    return { xs, sm, md, lg };
}