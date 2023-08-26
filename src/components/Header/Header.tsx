import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { LanguageSelector } from '../Language';
import { Theme } from '../Theme';
import { useTranslation } from '@translations';
import { HeaderStyles } from './HeaderStyles';

const Header = () => {
  const style = HeaderStyles;
  const { t } = useTranslation();

  return (
    <Box component='div' sx={style.container}>
      <AppBar position='fixed' color='default'>
        <Toolbar sx={style.toolbar}>
          <Typography
            variant='h5'
            sx={{ fontWeight: 700, letterSpacing: '1px' }}>
            {t('header.titleHeader')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Stack spacing={2} direction='row'>
              <LanguageSelector />
              <Theme />
            </Stack>
          </Box>
          <Box sx={{ display: { sx: 'flex', sm: 'none' } }}>
            <IconButton>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
