import { List, styled } from '@mui/material';

export const SxSidebarList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.secondary[100],
  borderRadius: '.5rem',
  padding: '.5rem',
}));
