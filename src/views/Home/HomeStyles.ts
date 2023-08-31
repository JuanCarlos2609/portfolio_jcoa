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

  const principalPage = {
    pl: { xs: '15px', sm: '30px' },
    pr: { xs: '15px', sm: '30px' },
    pt: '30px',
  };

  const contentAvatar = {
    display: 'flex',
    justifyContent: 'center',
  };

  const contentSocialButtons = {
    mt: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  const contentItem = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const principalText = {
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    fontSize: { xs: '30px', sm: '40px', md: '60px' },
    textAlign: { xs: 'center', md: 'start' },
    mt: { xs: '30px', md: '0px' },
    color: (theme: Theme) => theme.palette.common.white,
  };

  const professionText = {
    marginTop: { xs: '10px', md: '30px' },
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: { xs: '20px', sm: '30px', md: '40px' },
    textAlign: { xs: 'center', md: 'start' },
    // color: (theme: Theme) => theme.palette.primary.main,
  };

  const objetiveText = {
    marginTop: { xs: '20px', md: '60px' },
    letterSpacing: '0.5px',
    fontWeight: 400,
    fontSize: { xs: '14px', sm: '18px', md: '20px' },
    color: (theme: Theme) => theme.palette.common.white,
  };

  const actionButtons = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'start' },
    mt: { xs: '20px', md: '70px' },
    mb: { xs: '20px', md: '70px' },
  };

  const avatar = {
    height: { xs: '12rem', sm: '18rem', md: '20rem' },
    width: { xs: '12rem', sm: '18rem', md: '20rem' },
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
