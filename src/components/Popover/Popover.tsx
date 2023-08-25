import { ReactNode } from 'react';
import { Popover as MuiPopover } from '@mui/material';
import { PopoverStyles } from './PopoverStyles';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  [x: string]: any;
}

const style = PopoverStyles;

const Popover = ({ children, open, onClose, ...otherProps }: Props) => {
  return (
    <MuiPopover open={open} onClose={onClose} {...otherProps} sx={style.root}>
      {children}
    </MuiPopover>
  );
};

export { Popover };
