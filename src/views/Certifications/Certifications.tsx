import { Card, Grid, Paper, Typography } from '@mui/material';
import { useCertificationsStyles } from './CertificationsStyles';
import Carousel from 'react-material-ui-carousel';
import { ItemProps } from './types';
import { items } from './helpers';
import { useTranslation } from '@translations';

function Item({ props }: ItemProps) {
  return (
    <Paper
      sx={{
        height: { xs: 220, md: 310 },
        borderRadius: 0,
      }}
    >
      <Grid
        component='img'
        src={props.url}
        alt={props.name}
        sx={{ height: '100%', width: '100%' }}
      />
    </Paper>
  );
}

const Certifications = () => {
  const { t } = useTranslation();
  const style = useCertificationsStyles();

  return (
    <Grid sx={style.container}>
      <Typography sx={style.title}>{t('certifications.title')}</Typography>
        <Grid sx={style.contentCarousel}>
          <Card sx={{p: {xs: 0, md: 3},  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)'}}>
            <Carousel
              sx={{
                width: { xs: 300, sm: 350, md: 450 },
              }}
              >
              {items.map((item, index) => (
                <div key={`${index}-${item.name}`}>
                  <Item props={item} />
                  <Typography component='p' sx={style.textDescriptin}>
                    {item.name}
                  </Typography>
                </div>
              ))}
            </Carousel>
          </Card>
        </Grid>
    </Grid>
  );
};

export { Certifications };
