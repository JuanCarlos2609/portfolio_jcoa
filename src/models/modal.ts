import { ReactNode } from 'react';

export interface ModalProps {
  title?: string | ReactNode;
  show?: boolean;
  body?: ReactNode;
  actionButtons?: ReactNode;
}

export interface ModalContextType {
  modalState: ModalProps;
  handleOpenModal: (config: Partial<ModalProps>) => void;
  handleCloseModal: () => void;
}
