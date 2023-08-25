import { useTheme } from '@mui/material';

export const useHomeStyles = () => {
  const theme = useTheme();

  const container = {
    minHeight: '100vh',
    marginTop: { xs: '100px', lg: '0px' },
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
  };

  const professionText = {
    marginTop: '20px',
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: { xs: '20px', sm: '30px', md: '40px' },
  };

  const objetiveText = {
    marginTop: '35px',
    letterSpacing: '0.5px',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '18px', md: '20px' },
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
    avatar,
    icons,
  };
};
