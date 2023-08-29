import { Button, Grid, Paper } from '@mui/material';
import { useCertificationsStyles } from './CertificationsStyles';
import Carousel from 'react-material-ui-carousel';

interface Props {
  props: any;
  key: any;
}

function Item({ props, key }: Props) {
  return (
    <Paper
      key={key}
      sx={{
        backgroundColor: 'pink',
        padding: '20px',
        height: 300,
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <Button className='CheckButton'>Check it out!</Button>
    </Paper>
  );
}

const Certifications = () => {
  const style = useCertificationsStyles();

  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Grid
      sx={style.container}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Carousel
        sx={{
          width: 450,
          minHeight: 350,
        }}
      >
        {items.map((item, index) => (
          <Item key={index} props={item} />
        ))}
      </Carousel>
    </Grid>
  );
};

export { Certifications };
