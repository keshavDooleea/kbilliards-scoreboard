import { ReactNode } from 'react';
import './Modal.css';

interface BaseModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function BaseModal({ children, onClose }: BaseModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div className='modal-bkg' onClick={handleBackdropClick}>
      <div className='modal-container'>{children}</div>
    </div>
  );
}
