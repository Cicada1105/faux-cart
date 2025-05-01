function mouseAnimations() {
  const handleMouseEnter = (e) => {
    cursor.style.width = '6rem';
    cursor.style.height = '6rem';
    cursor.style.borderWidth = '3px';
    cursor.style.fontSize = '16px';
  }
  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      let pageX = e.pageX;
      let pageY = e.pageY;

      cursor.style.left = `${pageX}px`;
      cursor.style.top = `${pageY}px`;
    });
  }
  const handleMouseLeave = (e) => {
    cursor.style.width = '0rem';
    cursor.style.height = '0rem';
    cursor.style.borderWidth = '0px';
    cursor.style.fontSize = '0px';
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }  
}

export default mouseAnimations;