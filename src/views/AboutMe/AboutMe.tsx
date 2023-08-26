import { Grid, Typography } from '@mui/material';
import { useTranslation } from '@translations';
import { useAboutMeStyles } from './AboutMeStyles';

const AboutMe = () => {
  const style = useAboutMeStyles();
  const { t } = useTranslation();

  return (
    <Grid container style={{ backgroundColor: 'pink', marginBottom: '200px' }}>
      <Grid item xs={12}>
        <Typography sx={style.title}>{t('aboutMe.title')}</Typography>
      </Grid>
    </Grid>
  );
};

export { AboutMe };
