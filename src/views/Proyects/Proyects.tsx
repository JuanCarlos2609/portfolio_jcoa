import { Card, Grid, Theme, Typography } from '@mui/material';
import { useProyectsStyles } from './ProyectsStyles';
import { useTranslation } from '@translations';

const Proyects = () => {
  const { t } = useTranslation();
  const style = useProyectsStyles();

  return (
    <Grid sx={{ ml: '30px', mr: 2 }}>
      <Typography sx={style.title}>{t('projects.title')}</Typography>
      <Grid sx={style.container}>
        <Card
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  letterSpacing: 2,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: (theme: Theme) => theme.typography.pxToRem(23),
                  mb: 2,
                }}
              >
                Titutlo
              </Typography>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                incidunt voluptatibus distinctio iste, quos consequatur soluta
                tempora animi, molestias, voluptates dicta odit itaque
                repudiandae magni sequi modi debitis commodi sint!
              </Typography>

              <Typography
                sx={{
                  letterSpacing: 2,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: (theme: Theme) => theme.typography.pxToRem(23),
                  mt: 2,
                }}
              >
                Tech used
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{}}>
              2
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export { Proyects };
