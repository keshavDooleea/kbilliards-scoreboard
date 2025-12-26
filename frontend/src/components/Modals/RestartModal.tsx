import { useBoardScore, useNewGameContext } from '../../context';
import { BaseModal } from './BaseModal';
import { CommonModalProps } from '.';
import './Modal.css';

export function RestartModal({ onClose }: CommonModalProps) {
  const { resetScores } = useBoardScore();
  const { resetGame } = useNewGameContext();

  const onRestart = () => {
    resetScores();
    resetGame();
    onClose();
  };

  return (
    <BaseModal onClose={onClose}>
      <h2 className='modal-title'>Restart Game?</h2>
      <p className='modal-body'>Are you sure you want to restart?</p>
      <div className='modal-actions'>
        <button onClick={onRestart}>Yes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </BaseModal>
  );
}
