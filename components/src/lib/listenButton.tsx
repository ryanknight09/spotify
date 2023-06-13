import { Button, styled } from '@mui/material';

export const ListenButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-sizeSmall': {
    maxHeight: '36.5px',
    borderRadius: '5rem',
    whiteSpace: 'nowrap',
    minWidth: ' auto',
    backgroundColor: '#1DB957',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#1DB957',
    },
  },
}));
