import { Theme, useTheme } from '@mui/material';
import teclado from '../../assets/teclado.jpg';

export const useHomeStyles = () => {
  const theme = useTheme();

  const container = {
    minHeight: '100vh', //80-90vh
    marginTop: { xs: '100px', lg: '0px' },
    display: 'flex',
    pl: { xs: '10px', md: '30px' },
    pr: { xs: '10px', md: '30px' },

    // backgroundImage: `url(${teclado})`,
    // height: '100vh',
    // width: '100%',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // overflowX: 'hidden',
    // overflow: 'hidden',
  };

  const contentItem = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const principalText = {
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    fontSize: { xs: '30px', sm: '40px', md: '60px' },
    textAlign: { xs: 'center', md: 'start' },
    mt: { xs: '30px', md: '0px' },
  };

  const professionText = {
    marginTop: '30px',
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: { xs: '20px', sm: '30px', md: '40px' },
    textAlign: { xs: 'center', md: 'start' },
  };

  const objetiveText = {
    marginTop: '70px',
    letterSpacing: '0.5px',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '18px', md: '20px' },
  };

  const actionButtons = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'start' },
    mt: '70px',
    mb: '70px',
  };

  const avatar = {
    height: { xs: '12rem', sm: '18rem', md: '20rem', lg: '23rem' },
    width: { xs: '12rem', sm: '18rem', md: '20rem', lg: '23rem' },
    marginBottom: '40px',
    border: '6px solid',
    color: (theme: Theme) => theme.palette.primary.main,
  };

  const icons = {
    width: '35px',
    height: '35px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  };

  return {
    container,
    contentItem,
    principalText,
    professionText,
    objetiveText,
    actionButtons,
    avatar,
    icons,
  };
};
