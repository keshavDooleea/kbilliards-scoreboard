import { useState, MouseEvent } from 'react';

interface IUseHandleClick {
  onClick?: () => void;
}

export function useHandleClick({ onClick }: IUseHandleClick) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);

      if (onClick) {
        setTimeout(() => onClick(), 150);
      }
    }, 200);
  };

  return { isClicked, handleClick };
}
