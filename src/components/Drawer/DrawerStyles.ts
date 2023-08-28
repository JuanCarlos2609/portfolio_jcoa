import { Theme } from '@mui/material';

export const useDrawerStyles = () => {
  const container = {
    zIndex: (theme: Theme) => theme.zIndex.drawer,
  };

  const contentDrawer = {
    width: 320,
  };

  const contentIcon = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  };

  const titleDrawer = {
    fontSize: '20px',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    mb: '20px',
    p: '20px'
  }

  return {
    container,
    contentDrawer,
    contentIcon,
    titleDrawer
  };
};
