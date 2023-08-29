import { Button, Grid, Paper } from '@mui/material';
import { useCertificationsStyles } from './CertificationsStyles';
import courseJsTs from '../../assets/jpg/ReactJs_Typescripct.jpg';
import Carousel from 'react-material-ui-carousel';

interface Props {
  props: any;
}

function Item({ props }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: 'pink',
        // padding: '20px',
        height: 310,
      }}
    >
      <img
        src={props.url}
        alt={props.name}
        style={{ height: '100%', width: '100%' }}
      />
    </Paper>
  );
}

const Certifications = () => {
  const style = useCertificationsStyles();

  const items = [
    {
      name: 'Constancia React Js + Typescript',
      url: courseJsTs,
      description: 'Probably the most random thing you have ever seen!',
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
          backgroundColor: 'green',
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${index}-${item.name}`}
            style={{ backgroundColor: 'grey' }}
          >
            <Item props={item} />
          </div>
        ))}
      </Carousel>
    </Grid>
  );
};

export { Certifications };
