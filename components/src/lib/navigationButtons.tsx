import { Box, IconButton, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const NavigationButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hasFromState = Boolean(location.state);

  return (
    <NavigationWrapper>
      <ButtonWrapper onClick={() => navigate(-1)} disabled={!hasFromState}>
        <BackIcon />
      </ButtonWrapper>
      <ButtonWrapper onClick={() => navigate(1)}>
        <ForwardIcon />
      </ButtonWrapper>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(Box)(() => ({
  mb: '1rem',
  display: 'flex',
  gap: '.5rem',
  width: '100%',
  borderRadius: '.5rem',
  position: 'absolute',
  top: '1rem',
  left: '1.5rem',
  zIndex: 1000,
}));

const ButtonWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[200],
  '&:hover': {
    backgroundColor: theme.palette.neutral[100],
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    backgroundColor: theme.palette.neutral[200],
  },
}));

const BackIcon = styled(NavigateBeforeIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const ForwardIcon = styled(NavigateNextIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));
