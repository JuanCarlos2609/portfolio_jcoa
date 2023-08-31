export const useCertificationsStyles = () => {
  const container = {
    pt: '20px',
    pl: { xs: '15px', md: '30px' },
    pr: { xs: '15px', md: '30px' },
  };

  const title = {
    mb: '30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: { xs: '18px', md: '25px' },
  };

  const contentCarousel = {
    display: 'flex',
    justifyContent: 'center',
  };

  const textDescriptin = {
    textAlign: 'center',
    mt: '10px',
    mb: '10px',
    fontSize: '16px',
    letterSpacing: '0.5px',
    fontWeight: 400,
  };

  return { container, title, contentCarousel, textDescriptin };
};
