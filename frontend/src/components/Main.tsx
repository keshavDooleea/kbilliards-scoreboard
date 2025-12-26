import { useState } from 'react';
import { Scoreboard } from './Scoreboard/Scoreboard';
import { WhoBreaks } from './WhoBreaks/WhoBreaks';
import { SelectBalls } from './SelectBalls/SelectBalls';
import { useNewGameContext } from '../context';
import { InstructionsModal } from './Modals';

function MainComponent() {
  const { isNew, isSelectingBalls } = useNewGameContext();

  if (isNew) {
    return <WhoBreaks />;
  }

  if (isSelectingBalls) {
    return <SelectBalls />;
  }

  return <Scoreboard />;
}

export function Main() {
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);

  const onInstructionsModalClicked = () => setShowInstructionsModal(true);
  const onInstructionsModalClose = () => setShowInstructionsModal(false);

  return (
    <>
      <img
        src='icons/instructions.svg'
        alt='instructions-icon'
        className='icon'
        onClick={onInstructionsModalClicked}
      />
      <MainComponent />
      {showInstructionsModal && (
        <InstructionsModal onClose={onInstructionsModalClose} />
      )}
    </>
  );
}
