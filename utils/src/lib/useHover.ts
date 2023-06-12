import { useState } from 'react';

export const useHover = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onHoverEnter = () => setIsHovering(true);
  const onHoverLeave = () => setIsHovering(false);

  const hoverHandlers = {
    onMouseEnter: onHoverEnter,
    onMouseLeave: onHoverLeave,
  };

  return { isHovering, onHoverEnter, onHoverLeave, hoverHandlers };
};
