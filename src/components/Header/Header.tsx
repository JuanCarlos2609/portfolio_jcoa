import { useEffect, useState } from 'react';
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
  Theme as ThemeMUI,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore, Menu, Translate } from '@mui/icons-material';
import { Drawer } from '../Drawer';
import { LanguageSelector } from '../Language';
import { Theme } from '../Theme';
import { useTranslation } from '@translations';
import { useHeaderStyles } from './HeaderStyles';
import { languages } from '../../translations/i18n';
// import logoDark from '../../assets/png/logo-dark.png';
// import logoLight from '../../assets/png/logo-light.png';

interface HeaderProps {
  proyectsRef: any;
}

const Header = ({ proyectsRef }: HeaderProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const { language, changeLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [collapse, setCollapse] = useState<boolean>(false);
  const style = useHeaderStyles({ scrolled });

  const handleSelectLanguage = (language: string) => {
    changeLanguage(language);

    setOpenDrawer(false);
    setCollapse(false);
  };

  // const ProyectsScrooll = () => {
  //   if (proyectsRef.current) {
  //     proyectsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box component='header' sx={style.container}>
      <Box component='nav' sx={style.toolbar}>
        <Typography variant='h5' sx={style.titleNav}>
          {t('header.titleHeader')}
        </Typography>
        {/* {!matches && (
          <Stack direction='row' spacing={2}>
            <Typography
              sx={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={ProyectsScrooll}
            >
              Proyectos
            </Typography>
            <Typography
              sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            >
              Contacto
            </Typography>
          </Stack>
        )} */}
        <div style={{ display: 'flex' }}>
          {matches ? (
            <Box>
              <Stack direction='row' spacing={1}>
                <Theme />
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                  <Menu color='primary' />
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
