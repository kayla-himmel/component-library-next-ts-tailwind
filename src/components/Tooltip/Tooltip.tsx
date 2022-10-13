import React, { useEffect, useRef, useState } from 'react';
import { trimWhiteSpace } from '../../../utils/helper';
import KEYBOARD_KEYS from '../../constants/keys.constants';
import { Button } from '../Button/Button';
import { TooltipComponentProps } from './Tooltip.interfaces';

export const Tooltip: React.FC<TooltipComponentProps> = ({ id }: TooltipComponentProps) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  // hover/click event for button to open the tooltip
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    // close tooltip on escape
    const closeTooltip = (e: KeyboardEvent) => {
      if (e.key === KEYBOARD_KEYS.ESCAPE) {
        setShow(false);
      }
    };
    window.addEventListener('keydown', closeTooltip);
    return () => window.removeEventListener('keydown', closeTooltip);
  }, []);

  // concatenate and camelCase the ID so each tooltip has a unique ID
  const formattedID = trimWhiteSpace(id);

  return (
    <div className="tooltip">
      {/* button to open the tooltip */}
      <Button ref={target} onClick={handleClick} onBlur={() => setShow(false)} data-testid={`tooltip-${formattedID}`} />

      {/* tooltip with overlay */}
      <div>Tooltip content</div>
    </div>
  );
};
