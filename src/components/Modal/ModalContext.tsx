/* eslint-disable react-refresh/only-export-components */
import { Context, createContext } from 'react';
import { ModalContextType, ModalProps } from '../../models';

export const initialState: ModalProps = {
  title: '',
  show: false,
  body: null,
  actionButtons: null,
};

export const ModalContext: Context<ModalContextType> | any =
  createContext(null);
