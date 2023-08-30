import { Card, Grid, Paper, Typography } from '@mui/material';
import { useCertificationsStyles } from './CertificationsStyles';
import scrum from '../../assets/png/scrum.png';
import userExperience from '../../assets/png/user_experience.png';
import courseJsTs from '../../assets/jpg/ReactJs_Typescripct.jpg';
import reactJsTs from '../../assets/png/Reactjs_Typescript.png';
import Carousel from 'react-material-ui-carousel';

interface ItemProps {
  props: {
    name: string;
    url: string;
  };
}

function Item({ props }: ItemProps) {
  return (
    <Paper
      sx={{
        height: { xs: 250, md: 310 },
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
  const style = useCertificationsStyles();

  const items = [
    {
      name: 'Certificación metodología SCRUM',
      url: scrum,
    },
    {
      name: 'Aspectos básicos del diseño de la  experiencia del  usuario',
      url: userExperience,
    },
    {
      name: 'Constancia impartición curso React Js y Typescipt',
      url: courseJsTs,
    },
    {
      name: 'Certificado Curso de React con Typescript',
      url: reactJsTs,
    },
  ];

  return (
    <Grid sx={style.container}>
      <Typography
        sx={{
          mb: '30px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: { xs: '18px', md: '25px' },
        }}
      >
        Certificados - Cursos - Logros
      </Typography>
      <Grid sx={style.contentCarousel}>
        <Carousel
          sx={{
            width: 450,
            // minHeight: 360,
            backgroundColor: 'green',
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
      </Grid>
    </Grid>
  );
};

export { Certifications };
