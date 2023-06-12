import { ListItemButton, styled } from '@mui/material';

export const SxSideBarItemButton = styled(ListItemButton)(({ theme }) => {
  const selectedColor = theme.palette.common.white;

  return {
    borderRadius: '.5rem',
    color: theme.palette.neutral.main,
    '&:hover': {
      color: selectedColor,
      backgroundColor: theme.palette.primary[200],
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary[100],
      color: selectedColor,
    },
  };
});
