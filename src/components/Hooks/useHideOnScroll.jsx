import { useState, useEffect } from 'react';

export function useHideOnScroll () {
  const [show, setShow] = useState(false);

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      show !== newShowFixed && setShow(newShowFixed);
    }

    document.addEventListener('scroll', onScroll);

    // destroy the listener
    return () => document.removeEventListener('scroll', onScroll);
  }, [show] )

  return { show }
}