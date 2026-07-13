import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter la taille de l'écran.
 * Remplace la logique dupliquée dans chaque composant.
 * 
 * @returns {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 */
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 992);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
  };
};

export default useScreenSize;
