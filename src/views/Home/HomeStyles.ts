import { Theme, useTheme } from '@mui/material';
import teclado from '../../assets/png/teclado.jpg';

export const useHomeStyles = () => {
  const theme = useTheme();

  const container = {
    minHeight: '100vh',
    backgroundImage: `url(${teclado})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    overflowX: 'hidden',
    overflow: 'hidden',
  };
  const rootDivider = {
    color: (theme: Theme) => theme.palette.primary.main,
    border: '1px solid',
  };

  const principalPage = {
    pl: { xs: '15px', md: '30px' },
    pr: { xs: '15px', md: '30px' },
    pt: '30px',
  };

  const contentAvatar = {
    display: 'flex',
    justifyContent: 'center',
  };

  const contentSocialButtons = {
    mt: 5,
    display: 'flex',
    justifyContent: 'center',
  };

  const contentItem = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: { xs: 'start', md: 'center' },
  };

  const principalText = {
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    fontSize: { xs: '30px', sm: '40px', md: '60px' },
    textAlign: { xs: 'center', md: 'start' },
    mt: { xs: 9, md: 0 },
    mb: { xs: 1, md: 2 },
    color: (theme: Theme) => theme.palette.common.white,
  };

  const professionText = {
    mt: { xs: 3, md: 0 },
    mb: { xs: 3, md: 4 },
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: { xs: '20px', sm: '30px', md: '40px' },
    textAlign: { xs: 'center', md: 'start' },
  };

  const objetiveText = {
    mt: { xs: 3, md: 6 },
    mb: { xs: 8, md: 6 },
    letterSpacing: '0.5px',
    fontWeight: 400,
    fontSize: { xs: '17px', sm: '20px', md: '20px' },
    textAlign: { xs: 'center', md: 'start' },
    color: (theme: Theme) => theme.palette.common.white,
  };

  const actionButtons = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'start' },
    pt: { xs: 0, md: 6 },
    pb: 10,
  };

  const avatar = {
    height: { xs: '15rem', sm: '20rem', md: '23rem' },
    width: { xs: '15rem', sm: '20rem', md: '23rem' },
    marginBottom: { xs: '10px', md: '40px' },
    border: '6px solid',
    color: (theme: Theme) => theme.palette.primary.main,
  };

  const icons = {
    width: { xs: '30px', md: '35px' },
    height: { xs: '30px', md: '35px' },
    color: (theme: Theme) => theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  };

  return {
    container,
    rootDivider,
    principalPage,
    contentAvatar,
    contentSocialButtons,
    contentItem,
    principalText,
    professionText,
    objetiveText,
    actionButtons,
    avatar,
    icons,
  };
};
