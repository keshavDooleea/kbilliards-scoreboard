import { useState, useEffect } from 'react';
import { Scoreboard } from './Scoreboard/Scoreboard';
import { WhoBreaks } from './WhoBreaks/WhoBreaks';
import { useNewGameContext } from '../context';
import './Main.css';

export function Main() {
  const { isNew } = useNewGameContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showWhoBreaks, setShowWhoBreaks] = useState(isNew);

  useEffect(() => {
    if (isNew !== showWhoBreaks) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShowWhoBreaks(isNew);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isNew, showWhoBreaks]);

  return (
    <div className={`main-container ${isTransitioning ? 'transitioning' : ''}`}>
      <div
        className={`page-wrapper ${
          showWhoBreaks ? 'who-breaks-active' : 'scoreboard-active'
        }`}>
        <div
          className={`page who-breaks-page ${
            showWhoBreaks ? 'active' : 'inactive'
          }`}>
          <WhoBreaks />
        </div>
        <div
          className={`page scoreboard-page ${
            !showWhoBreaks ? 'active' : 'inactive'
          }`}>
          <Scoreboard />
        </div>
      </div>
    </div>
  );
}
