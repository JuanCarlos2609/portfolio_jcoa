import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/Header';
import { StylesFullScreenLAyout } from './StylesFullScreenLayout';

interface Props {
  children: ReactNode;
}

const FullScreenLayout = ({ children }: Props) => {
  const style = StylesFullScreenLAyout;

  return (
    <>
      <Header />
      <Box component='div' sx={style.container}>
        {children}
      </Box>
    </>
  );
};

export { FullScreenLayout };
