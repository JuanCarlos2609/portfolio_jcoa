import { useState } from 'react';
import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Menu,
  Translate,
} from '@mui/icons-material';
import { Drawer } from '../Drawer';
import { LanguageSelector } from '../Language';
import { Theme } from '../Theme';
import { useTranslation } from '@translations';
import { HeaderStyles } from './HeaderStyles';
import { languages } from '../../translations/i18n';

const Header = () => {
  const style = HeaderStyles;
  const { t } = useTranslation();
  const { language, changeLanguage } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleSelectLanguage = (language: string) => {
    changeLanguage(language);

    setOpenDrawer(false);
    setCollapse(false);
  };

  return (
    <Box component='div' sx={style.container}>
      <AppBar position='fixed' color='default'>
        <Toolbar sx={style.toolbar}>
          <Typography
            variant='h5'
            sx={{ fontWeight: 700, letterSpacing: '1px' }}
          >
            {t('header.titleHeader')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Stack spacing={2} direction='row'>
              <LanguageSelector />
              <Theme />
            </Stack>
          </Box>
          <Box sx={{ display: { sx: 'flex', sm: 'none' }}}>
            <Stack direction="row" spacing={1}>
            <Theme/>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <Menu />
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        title={t('drawer.titleDrawer')}
        onClose={() => setOpenDrawer(false)}
      >
        <ListItemButton onClick={() => setCollapse(!collapse)}>
          <ListItemIcon>
            <Translate />
          </ListItemIcon>
          <ListItemText primary={t(`language.${language}`)} />
          {collapse ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={collapse}>
          {languages.map((language, index) => (
            <List component='div' disablePadding key={`${index}-${language}`}>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSelectLanguage(language)}
              >
                <ListItemText primary={t(`language.${language}`)} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </Drawer>
    </Box>
  );
};

export { Header };
