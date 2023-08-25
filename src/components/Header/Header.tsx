import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { LanguageSelector } from '../Language';
import { Theme } from '../Theme';

const Header = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h5'
          style={{ fontWeight: 700, letterSpacing: '1px' }}
        >
          Portafolio
        </Typography>
        <Box style={{ display: 'flex' }}>
          <Stack spacing={2} direction='row'>
            <LanguageSelector />
            <Theme />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
