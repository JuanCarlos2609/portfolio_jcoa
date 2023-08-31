export const useCertificationsStyles = () => {
  const container = {
    pt: '20px',
    pl: { xs: '10px', md: '20px' },
    pr: { xs: '10px', md: '20px' },
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
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontWeight: 200,
  };

  return { container, title, contentCarousel, textDescriptin };
};
