import { ReactNode, useEffect } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Header } from '../../components/Header';
import { StylesFullScreenLAyout } from './StylesFullScreenLayout';
import { LanguageSelector } from '../../components/Language';
import { Theme } from '../../components/Theme';

interface Props {
  children: ReactNode;
}

const FullScreenLayout = ({ children }: Props) => {
  const style = StylesFullScreenLAyout();

  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   return () => {
  //     window.onbeforeunload = null;
  //   };
  // }, []);

  return (
    <Box component='div' sx={style.container} style={{}}>
      <Header />

      <Box component='div' sx={style.render}>
        {children}
      </Box>
    </Box>
  );
};

export { FullScreenLayout };
