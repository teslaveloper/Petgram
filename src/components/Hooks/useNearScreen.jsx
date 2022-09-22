import { useEffect, useState, useRef } from 'react';

export function useNearScreen () {
  const refElement = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function () {
    // load if pollifyl is available
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // observe the referrenced element to do a lazy load
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        } else {
          setShow(false);
        }
      })

      observer.observe(refElement.current);
    })
  }, [refElement])

  return { show, refElement }
}
