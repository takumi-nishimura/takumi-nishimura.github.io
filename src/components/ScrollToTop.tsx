import React from 'react';
import { useLocation } from 'react-router-dom';

// React Router keeps the previous scroll position across route changes, which
// can leave a new page scrolled partway down with its top hidden under the
// sticky navbar. Reset to the top whenever the path changes. Section scrolls on
// the home page share the same pathname ("/"), so they are unaffected.
const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTop;
