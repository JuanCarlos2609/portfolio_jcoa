export const useProyectsStyles = () => {
  const container = {
    pl: { xs: '15px', md: '30px' }, //30
    pr: { xs: '15px', md: '30px' },
    pt: '10px',
    mb: '30px',
  };

  const title = {
    fontWeight: 'bold',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
    fontSize: { xs: '20px', md: '25px' },
    mb: 3,
  };

  return { container, title };
};
