import { useEffect, useRef, useState } from 'react';
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
  Divider,
  Theme,
} from '@mui/material';
import {
  Download,
  LinkedIn,
  GitHub,
  Facebook,
  Instagram,
} from '@mui/icons-material';
import { useHomeStyles } from './HomeStyles';
import { Items } from './type';
import { Certifications } from '../Certifications';
import { Header } from '../../components/Header';
import { AboutMe } from '../AboutMe';
import { useTranslation } from '@translations';
import photo from '../../assets/png/photo.jpg';
import { Proyects } from '../Proyects';

const Home = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const style = useHomeStyles();
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const proyectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShow(true);
  }, []);

  const AboutMeScrollTo = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    {
      name: 'Instagram',
      icon: <Instagram sx={style.icons} />,
      path: 'https://www.google.com',
    },
  ];

  return (
    <Grid component='div' sx={{ flexDirection: 'column' }}>
      <Grid sx={style.container}>
        <Header proyectsRef={proyectsRef} />
        <Divider variant='middle' sx={style.rootDivider} />
        <Grid container sx={style.principalPage}>
          {matches && (
            <Grid item xs={12} sx={{ flexDirection: 'column', mt: 10 }}>
              <Grid style={style.contentAvatar}>
                <Slide direction='down' in={show} timeout={1000}>
                  <Avatar sx={style.avatar} src={photo} alt='photo' />
                </Slide>
              </Grid>
              <Stack
                direction='row'
                spacing={2}
                sx={style.contentSocialButtons}
              >
                {Items.map((item, index) => (
                  <IconButton
                    key={`${index}-${item.name}`}
                    component='a'
                    target='_blank'
                    href={item.path}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          )}
          <Grid item xs={12} md={6} sx={style.contentItem}>
            <Stack direction='column'>
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
                Gran capacidad de adaptación a las nuevas tecnologías y
                paradigmas, proporcionando soluciones efectivas. Continua
                capacitación y formación de habilidades autodidactas que
                permitan la expansión de conocimientos técnicos en mi profesión.
              </Typography>

              <Stack
                direction='row'
                spacing={{ xs: 2, sm: 4 }}
                sx={style.actionButtons}
              >
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
                <Button variant='contained' onClick={AboutMeScrollTo}>
                  {t('home.aboutMe')}
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {!matches && (
            <Grid item xs={12} md={6} sx={style.contentItem}>
              <Stack direction='column' sx={{ alignItems: 'center' }}>
                <Avatar sx={style.avatar} src={photo} alt='photo' />

                <Stack direction='row' spacing={2} sx={{ mt: '20px' }}>
                  {Items.map((item, index) => (
                    <Tooltip key={`${index}-${item.name}`} title={item.name}>
                      <IconButton
                        component='a'
                        target='_blank'
                        href={item.path}
                      >
                        {item.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Divider variant='fullWidth' sx={style.rootDivider} />
      <Grid sx={{ mb: 8, mt: 8 }} ref={aboutMeRef}>
        <AboutMe />
      </Grid>
      <Divider variant='middle' sx={style.rootDivider} />
      <Grid sx={{ mb: 10, mt: 8 }}>
        <Certifications />
      </Grid>
      <Divider variant='middle' sx={style.rootDivider} />
      <Grid sx={{ mb: 20, mt: 8 }} ref={proyectsRef}>
        <Proyects />
      </Grid>
    </Grid>
  );
};

export { Home };
