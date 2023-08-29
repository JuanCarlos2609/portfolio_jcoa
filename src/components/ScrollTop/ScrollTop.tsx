import { Zoom, useScrollTrigger } from '@mui/material';
import React from 'react';

interface ScrollTopProps {
  children: React.ReactElement;
}

export function ScrollTop(props: ScrollTopProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role='presentation'
        style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        {children}
      </div>
    </Zoom>
  );
}
