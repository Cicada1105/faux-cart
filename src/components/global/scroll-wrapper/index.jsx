import { useRef } from 'react';

import styles from './index.module.css';

function initializeDragEvents(el) {
  let isGrabbing = false;
  let lastClientX = 0;
  const handleMouseDown = (e) => {
    isGrabbing = true;
    lastClientX = e.clientX;
  }
  const handleMouseMove = (e) => {
    if ( isGrabbing ) {
      requestAnimationFrame(() => {
        el.current.scrollBy(lastClientX - e.clientX,0);

        lastClientX = e.clientX;
      })
    }
  }
  const handleMouseUp = () => {
    isGrabbing = false;
    lastClientX = 0;
  }

  return {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }
}
function ScrollWrapper({ children }) {
  const scrollContRef = useRef();
  const dragEvents = initializeDragEvents(scrollContRef);

  return (
    <div ref={scrollContRef} {...dragEvents} className={ styles.horScrollbar.concat(' pb-8 hor-scrollbar xl:overflow-auto')}>
      { children }
    </div>
  )
}

export default ScrollWrapper;