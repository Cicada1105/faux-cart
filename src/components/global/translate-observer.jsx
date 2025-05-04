import React from 'react';

import { useInView } from 'react-intersection-observer';

function TranslateObserver({ children }) {
  const BASE_STYLE = 'transition duration-700';
  const SLIDE_UP_STYLE = ' translate-y-0 '.concat(BASE_STYLE);
  const SLIDE_DOWN_STYLE = ' translate-y-1/4 '.concat(BASE_STYLE);

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  return (
    React.cloneElement( children, {
      ref: ref,
      className: children.props.className.concat( inView ? SLIDE_UP_STYLE : SLIDE_DOWN_STYLE )
    })
  )
}

export default TranslateObserver;