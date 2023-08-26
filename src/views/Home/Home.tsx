import {
  Avatar,
  Button,
  Grid,
  Stack,
  Typography,
  Slide,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  Fab,
} from '@mui/material';
import {
  Download,
  LinkedIn,
  GitHub,
  Facebook,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { useHomeStyles } from './HomeStyles';
import { useTranslation } from '@translations';
import { useEffect, useState } from 'react';
import { Items } from './type';
import { AboutMe } from '../AboutMe';
import { ScrollTop } from '../../components/ScrollTop';

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const style = useHomeStyles();
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const Items: Items[] = [
    {
      name: 'Linkedin',
      icon: <LinkedIn sx={style.icons} />,
      path: 'https://www.linkedin.com/in/juan-carlos-orta-del-angel-16653b18a',
    },
    {
      name: 'Github',
      icon: <GitHub sx={style.icons} />,
      path: 'https://github.com/JuanCarlos2609',
    },
    {
      name: 'Facebook',
      icon: <Facebook sx={style.icons} />,
      path: 'https://www.facebook.com/juan.veyita',
    },
  ];

  return (
    <div style={{ flexDirection: 'column', paddingBottom: '20px' }}>
      <Grid container spacing={2} sx={style.container}>
        {matches && (
          <Grid item xs={12} md={6} sx={style.contentItem}>
            <Slide direction='down' in={show} timeout={1000}>
              <Avatar sx={style.avatar} />
            </Slide>

            <Stack direction='row' spacing={2} sx={{ mt: '20px' }}>
              {Items.map((item) => (
                <Tooltip key={item.name} title={item.name}>
                  <IconButton component='a' target='_blank' href={item.path}>
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
        )}
        <Grid item xs={12} md={6} sx={style.contentItem}>
          <Grid sx={{ m: '10px' }}>
            <Typography variant='h2' sx={style.principalText}>
              {t('home.greeting')}, {t('home.iam')}
            </Typography>
            <Typography
              component='p'
              sx={style.professionText}
              variant='h4'
              color='primary'
            >
              {t('home.profession')}
            </Typography>
            <Typography sx={style.objetiveText} variant='h6'>
              Fomento del trabajo en equipo, solución rápida a problemas y gran
              capacidad de adaptación a las nuevas tecnologías y paradigmas,
              proporcionando soluciones efectivas que producen un impacto
              inmediato. Continua capacitación y formación de habilidades
              autodidactas que permitan la expansión de conocimientos técnicos
              en mi profesión.
            </Typography>

            <Stack direction='row' spacing={2} sx={{ marginTop: '40px' }}>
              <Button
                variant='outlined'
                endIcon={<Download />}
                href='/Curriculum_Vitae.pdf'
                sx={{ textDecoration: 'none' }}
                color='primary'
                download
              >
                {t('home.downloadCv')}
              </Button>
              <Button variant='contained' href='#aboutMe'>
                {t('home.aboutMe')}
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {!matches && (
          <Grid item xs={12} md={6} sx={style.contentItem}>
            <Slide direction='down' in={show} timeout={1000}>
              <Avatar sx={style.avatar} />
            </Slide>

            <Stack direction='row' spacing={2} sx={{ mt: '20px' }}>
              {Items.map((item) => (
                <Tooltip key={item.name} title={item.name}>
                  <IconButton component='a' target='_blank' href={item.path}>
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>

      <div id='aboutMe'>
        <AboutMe />
        <ScrollTop>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </div>
    </div>
  );
};

export { Home };
