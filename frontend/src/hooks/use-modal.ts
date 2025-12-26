import { useState } from 'react';

export function useModal() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onModalClicked = () => setShowModal(true);
  const onModalClose = () => setShowModal(false);

  return { showModal, onModalClicked, onModalClose };
}
