import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useProyectsStyles } from './ProyectsStyles';
import { useHelpers } from './helpers';
import { GitHub, Pageview } from '@mui/icons-material';
import { useTranslation } from '@translations';

const Proyects = () => {
  const { t } = useTranslation();
  const { proyects } = useHelpers();
  const style = useProyectsStyles();

  return (
    <Grid sx={style.container}>
      <Typography sx={style.title}>{t('projects.title')}</Typography>

      <Grid container spacing={2}>
        {proyects.map((item, index) => (
          <Grid item xs={12} md={6} key={`${index}-${item.name}`}>
            <Card
              sx={{
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              <CardMedia component='img' src={item.img} />
              <CardContent>
                <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>
                  {item.name}
                </Typography>
                <Typography variant='body2'>{item.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={item.siteWeb}
                  variant='outlined'
                  target='_blank'
                  sx={{ textTransform: 'capitalize' }}
                  endIcon={<Pageview />}
                >
                  {t('projects.visit')}
                </Button>
                <Button
                  endIcon={<GitHub />}
                  href={item.siteWeb}
                  variant='contained'
                  sx={{ textTransform: 'capitalize' }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export { Proyects };
