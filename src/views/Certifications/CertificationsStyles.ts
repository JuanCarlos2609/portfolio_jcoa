export const useCertificationsStyles = () => {
  const container = {
    pt: '20px',
    pl: { xs: '10px', md: '30px' },
    pr: { xs: '10px', md: '30px' },
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
    fontWeight: 200,
  };

  return { container, contentCarousel, textDescriptin };
};
