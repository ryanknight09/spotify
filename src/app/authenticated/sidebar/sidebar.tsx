import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Stack, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Navigation } from './navigation';
import { Playlists } from './playlists';

export const SideBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav>
      <SxSidebarWrapper>
        <Button
          variant="contained"
          endIcon={<LogoutIcon />}
          color="secondary"
          onClick={onLogout}
        >
          Logout
        </Button>
        <Navigation />
        <Playlists />
      </SxSidebarWrapper>
    </nav>
  );
};

export const SxSidebarWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '17.5rem',
  backgroundColor: theme.palette.secondary.main,
  overflow: 'hidden',
  gap: '.5rem',
}));
