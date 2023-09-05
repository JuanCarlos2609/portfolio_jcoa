import { Divider, Grid, Paper, Tooltip, Typography } from '@mui/material';
import { School, Engineering } from '@mui/icons-material';
import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import { useTranslation } from '@translations';
import { useAboutMeStyles } from './AboutMeStyles';
import { skillsArray } from './helpers';

const AboutMe = () => {
  const style = useAboutMeStyles();
  const { t } = useTranslation();

  const workCompanies = [
    {
      companyName: t('aboutMe.fristCompanyName'),
      position: t('aboutMe.fristPosition'),
      description: t('aboutMe.fristDescription'),
    },
    {
      companyName: t('aboutMe.secondCompanyName'),
      position: t('aboutMe.secondPosition'),
      description: t('aboutMe.secondDescription'),
    },
    {
      companyName: t('aboutMe.thirdCompanyName'),
      position: t('aboutMe.thirdPosition'),
      description: t('aboutMe.thirdDescription'),
    },
  ];

  return (
    <Grid sx={style.container}>
      <Typography sx={style.title}>{t('aboutMe.title')}</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Timeline position='alternate-reverse'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined'>
                  <School />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={style.titleTimeLine}>
                  {t('aboutMe.education')}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontStyle: 'oblique' }}>
                  {t('aboutMe.nameSchool')}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontStyle: 'oblique' }}>
                  {t('aboutMe.grade')}
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined'>
                  <Engineering />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
              </TimelineSeparator>

              <TimelineContent>
                <Typography sx={style.titleTimeLine}>
                  {t('aboutMe.work')}
                </Typography>
                {workCompanies.map((item, index) => (
                  <div key={`${index}-${item.companyName}`}>
                    <Typography sx={style.subtitleTimeLine}>
                      {item.companyName}
                    </Typography>
                    <Typography sx={{ fontSize: '13.5px' }}>
                      {item.position}
                    </Typography>
                    <Typography sx={{ mt: '10px', fontSize: '13px' }}>
                      {item.description}
                    </Typography>
                    <Divider sx={{ mt: '10px' }} />
                  </div>
                ))}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: '20px' }}>
          <Typography sx={style.subtitle}>{t('aboutMe.skillTitle')}</Typography>

          <Grid
            container
            spacing={3}
            justifyContent={{ xs: 'center', md: 'start' }}
          >
            {skillsArray.map((item, index) => (
              <Tooltip key={`${index}-${item.name}`} title={item.name}>
                <Grid item>
                  <Paper sx={style.rootPaper}>
                    <Grid
                      component='img'
                      src={item.icon}
                      alt={item.name}
                      sx={style.img}
                    />
                  </Paper>
                </Grid>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { AboutMe };
