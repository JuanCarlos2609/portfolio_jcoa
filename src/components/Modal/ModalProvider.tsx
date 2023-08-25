/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useMemo, useState } from 'react';
import { ModalContext, initialState } from './ModalContext';
import { ModalProps } from '../../models';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState(initialState);

  const handleUpdateState = (newState: Partial<ModalProps>) => {
    setModalState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const handleOpenModal = (config: Partial<ModalProps>): void => {
    config.show = true;
    handleUpdateState(config);
  };

  const handleCloseModal = (): void => {
    setModalState({
      ...initialState,
      // configProps: { ...modalState.configProps },
    });
  };

  const contextValue = useMemo(
    () => ({
      modalState,
      handleOpenModal,
      handleCloseModal,
    }),
    [modalState]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
