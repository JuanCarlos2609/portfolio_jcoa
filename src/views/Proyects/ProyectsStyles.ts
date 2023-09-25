export const useProyectsStyles = () => {
  const container = {
    ml: { xs: 2, sm: 8, md: 20 },
    mr: { xs: 2, sm: 8, md: 20 },
    mt: 8,
  };

  const title = {
    fontWeight: 'bold',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
    fontSize: { xs: '20px', md: '25px' },
    mb: 3,
  };

  const text = {
    textTransform: 'capitalize',
  };

  return { container, title, text };
};
