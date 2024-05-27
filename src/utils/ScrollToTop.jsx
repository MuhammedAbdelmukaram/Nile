import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'  // Adds a smooth scrolling effect
        });
    }, [pathname]);  // This effect will run on change of pathname

    return null;  // This component does not render anything
};

export default ScrollToTop;
