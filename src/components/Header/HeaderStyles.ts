import { Theme } from '@mui/material';

interface HeaderStylesProps {
  scrolled: boolean;
}

export const useHeaderStyles = ({ scrolled }: HeaderStylesProps) => {
  const container = {
    flexGrow: 1,
    width: '100%',
    padding: 0.5,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
    backdropFilter: 'blur(10px)',
    boxShadow: scrolled ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    paddingLeft: { xs: '10px', sm: '30px' },
    paddingRight: { xs: '10px', sm: '30px' },
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  };

  const toolbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleNav = {
    color: (theme: Theme) => theme.palette.common.white,
    fontWeight: 700,
    letterSpacing: '1px',
  };

  return { container, toolbar, titleNav };
};
