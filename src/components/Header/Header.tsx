import { useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore, Menu, Translate } from '@mui/icons-material';
import { Drawer } from '../Drawer';
import { LanguageSelector } from '../Language';
import { Theme } from '../Theme';
import { useTranslation } from '@translations';
import { HeaderStyles } from './HeaderStyles';
import { languages } from '../../translations/i18n';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
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
    <Box component='header' sx={style.container}>
      <Box component='nav' sx={style.toolbar}>
        <Typography variant='h5' sx={{ fontWeight: 700, letterSpacing: '1px' }}>
          {t('header.titleHeader')}
        </Typography>
        <div style={{ display: 'flex' }}>
          {matches ? (
            <Box>
              <Stack direction='row' spacing={1}>
                <Theme />
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                  <Menu  color='primary'/>
                </IconButton>
              </Stack>
            </Box>
          ) : (
            <Stack direction='row' spacing={2}>
              <LanguageSelector />
              <Theme />
            </Stack>
          )}
        </div>
      </Box>

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
