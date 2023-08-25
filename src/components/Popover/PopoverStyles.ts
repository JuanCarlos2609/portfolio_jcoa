import { Theme } from '@mui/material';

export const PopoverStyles = {
  root: {
    '& .MuiPopover-paper': {
      margin: (theme: Theme) => theme.spacing(1),
      overflow: 'visible',
      boxShadow: (theme: Theme) => theme.shadows[4],

      '&::before': {
        content: "''",
        position: 'absolute',
        top: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: (theme: Theme) =>
          `transparent transparent ${
            theme.palette.mode === 'dark'
              ? '#283543'
              : theme.palette.common.white
          }`,
      },
    },
  },
};
