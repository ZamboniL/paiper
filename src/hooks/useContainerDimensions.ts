import { useEffect, useState } from 'react';

export const useContainerDimensions = <T extends HTMLElement>(myRef: React.RefObject<T>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current?.offsetWidth ?? 0,
      height: myRef.current?.offsetHeight ?? 0
    });

    const handleResize = () => {
      if (myRef.current) {
        setDimensions(getDimensions());
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};
