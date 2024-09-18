import { ReactNode } from 'react';
import { Box, Fab } from '@mui/material';
import { StylesFullScreenLAyout } from './StylesFullScreenLayout';
import { ScrollTop } from '../../components/ScrollTop';
import { KeyboardArrowUp } from '@mui/icons-material';

interface Props {
  children: ReactNode;
}

const FullScreenLayout = ({ children }: Props) => {
  const style = StylesFullScreenLAyout();

  return (
    <Box component='div' sx={style.container}>
      <>{children}</>

      <ScrollTop>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export { FullScreenLayout };
