import { CommonModalProps } from '.';
import { BaseModal } from './BaseModal';
import './Modal.css';

export function InstructionsModal({ onClose }: CommonModalProps) {
  return (
    <BaseModal onClose={onClose}>
      <h2 className='modal-title'>Instructions</h2>
      <div className='modal-body instructions-body'>
        <ul>
          <li>Tap on a player name (p1 and p2 by default) to modify.</li>
          <li>
            On "Who breaks?" screen, double tap on either left or right panel to
            select who breaks first.
          </li>
          <li>
            When the game starts, swipe up or down on a panel to update score.
          </li>
          <li>Tap on the restart icon on the top left to start a new match.</li>
        </ul>
      </div>
      <div className='modal-actions'>
        <button onClick={onClose}>Close</button>
      </div>
    </BaseModal>
  );
}
