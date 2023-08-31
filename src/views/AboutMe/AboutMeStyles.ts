export const useAboutMeStyles = () => {
  const container = {
    pl: { xs: '10px', md: '20px' }, //30
    pr: { xs: '10px', md: '20px' },
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
    letterSpacing: '1px',
    textTransform: 'uppercase',
    pb: '10px',
    textDecoration: 'underline',
  };

  const subtitleTimeLine = {
    fontWeight: 600,
    mt: '15px',
    fontSize: '13.5px',
  };

  return { container, title, subtitle, titleTimeLine, subtitleTimeLine };
};
