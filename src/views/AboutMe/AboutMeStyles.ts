export const useAboutMeStyles = () => {
  const container = {
    pl: { xs: '10px', md: '30px' },
    pr: { xs: '10px', md: '30px' },
    pt: '10px'
  };

  const title = {
    fontWeight: 'bold',
    letterSpacing: '1.3px',
  };

  const subtitle = {
    fontWeight: 550,
    fontSize: '20px',
    mb: '20px',
    mt: '20px',
    letterSpacing: '1px'
  };

  const titleTimeLine = {
    fontSize: {xs: '11px', md: '15px'},
    fontWeight: 550,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    pb: '10px',
    textDecoration: 'underline'
  };

  const subtitleTimeLine = {
    fontWeight: 600,
    mt: '15px',
    fontSize: '13.5px'
  };

  return {container, title, subtitle, titleTimeLine, subtitleTimeLine };
};
