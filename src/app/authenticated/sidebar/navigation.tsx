import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { SxSideBarItemButton, SxSidebarList } from '@spotify/components';
import { useLocation, useNavigate } from 'react-router-dom';

const navConfig = [
  {
    label: 'Home',
    url: 'home',
    Icon: HouseIcon,
  },
  {
    label: 'Browse',
    url: 'library',
    Icon: SearchIcon,
  },
];

export const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentUrl = pathname.split('/')[1];

  return (
    <SxSidebarList>
      {navConfig.map(({ label, url, Icon }) => (
        <SxSideBarItemButton
          key={label}
          selected={url === currentUrl}
          onClick={() => navigate(url, { state: { from: url } })}
          sx={{ gap: '1rem' }}
        >
          <Icon />
          <Typography variant="subtitle2">{label}</Typography>
        </SxSideBarItemButton>
      ))}
    </SxSidebarList>
  );
};
