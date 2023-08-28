import { Close } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Drawer as MuiDrawer,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerStyles } from './DrawerStyles';

interface DrawerProps {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose: (event: boolean) => void;
}

const Drawer = ({ open, title, children, onClose }: DrawerProps) => {
  const isDismissible = true;
  const style = useDrawerStyles();

  const toggleDrawer = (event: any) => {
    if (
      !isDismissible &&
      ((event.type === 'keydown' && event.key === 'Escape') ||
        event.type === 'click')
    ) {
      return;
    }

    onClose(false);
  };

  return (
    <MuiDrawer
      open={open}
      anchor='right'
      onClose={toggleDrawer}
      sx={style.container}
    >
      <Box sx={style.contentDrawer}>
        <Box sx={style.contentIcon}>
          <IconButton onClick={() => onClose(false)}>
            <Close />
          </IconButton>
        </Box>
        <Typography sx={style.titleDrawer}>{title}</Typography>
        {children}
      </Box>
    </MuiDrawer>
  );
};

export { Drawer };
