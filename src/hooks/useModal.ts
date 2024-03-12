import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  return { modalOpen, openModal, closeModal, error, setError, setModalOpen };
};

export default useModal;
