import { Scoreboard } from './Scoreboard/Scoreboard';
import { WhoBreaks } from './WhoBreaks/WhoBreaks';
import { SelectBalls } from './SelectBalls/SelectBalls';
import { useNewGameContext } from '../context';
import { InstructionsModal } from './Modals';
import { useModal } from '../hooks';

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
  const {
    showModal: showInstructionsModal,
    onModalClicked: onInstructionsModalClicked,
    onModalClose: onInstructionsModalClose,
  } = useModal();

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
