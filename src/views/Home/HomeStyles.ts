import { useTheme } from '@mui/material';

export const useHomeStyles = () => {
  const theme = useTheme();

  const container = {
    minHeight: '95vh', //80-90vh
    marginTop: { xs: '100px', lg: '0px' },
    display: 'flex',
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
    marginTop: '20px',
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: { xs: '20px', sm: '30px', md: '40px' },
    textAlign: { xs: 'center', md: 'start' },
  };

  const objetiveText = {
    marginTop: '35px',
    letterSpacing: '0.5px',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '18px', md: '20px' },
  };

  const actionButtons = {
    display: 'flex',
    justifyContent: {xs: 'center', md: 'start'},
    mt: '40px'
  };

  const avatar = {
    height: { xs: '12rem', sm: '18rem', md: '20rem' },
    width: { xs: '12rem', sm: '18rem', md: '20rem' },
    marginBottom: '40px',
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
