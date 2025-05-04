import React, { createElement } from 'react';

import { useInView } from 'react-intersection-observer';

function ScaleObserver({ children }) {
  const BASE_STYLE = 'transition duration-700';
  const SCALED_UP_STYLE = ' scale-100 '.concat(BASE_STYLE);
  const SCALED_DOWN_STYLE = ' scale-75 '.concat(BASE_STYLE);

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  let child = typeof children.type === 'function' ? children.type(children.props) : children;
  
  return (
    React.cloneElement( child, {
      ref: ref,
      className: child.props.className?.concat( inView ? SCALED_UP_STYLE : SCALED_DOWN_STYLE )
    })
  )
}

export default ScaleObserver;