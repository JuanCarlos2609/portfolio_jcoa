import { Theme } from '@mui/material';

export const useAboutMeStyles = () => {
  const container = {
    pl: { xs: '15px', md: '30px' }, //30
    pr: { xs: '15px', md: '30px' },
    pt: '10px',
    mb: '30px',
  };

  const title = {
    fontWeight: 'bold',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
    fontSize: { xs: '20px', md: '25px' },
  };

  const subtitle = {
    fontWeight: 550,
    fontSize: '20px',
    mb: '20px',
    mt: '20px',
    letterSpacing: '1px',
  };

  const titleTimeLine = {
    fontSize: { xs: '11px', md: '15px' },
    fontWeight: 550,
    textTransform: 'capitalize',
    pb: '10px',
    cursor: 'pointer',
    letterSpacing: '1px',
    color: (theme: Theme) => theme.palette.primary.main,
  };

  const subtitleTimeLine = {
    fontWeight: 600,
    mt: '15px',
    fontSize: '13.5px',
  };

  const rootPaper = {
    p: 1,
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
  };

  const img = {
    height: { xs: '60px', md: '65px' },
    width: { xs: '60px', md: '65px' },
  };

  return {
    container,
    title,
    subtitle,
    titleTimeLine,
    subtitleTimeLine,
    rootPaper,
    img,
  };
};
