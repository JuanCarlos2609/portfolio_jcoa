import './ModalStyles.css';
import { useModal } from './hooks/useModal';
import { ModalContextType, ModalProps } from '../../models';

const Modal = () => {
  const { modalState, handleCloseModal }: ModalContextType = useModal();
  const {
    // actionButtons,
    body,
    show,
    title,
  }: ModalProps = modalState;

  return (
    <>
      {show ? (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h3 className="title">{title}</h3>
            <div className="body">{body}</div>
            <div className="content-button">
              <button onClick={() => handleCloseModal()} className="button">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export { Modal };
