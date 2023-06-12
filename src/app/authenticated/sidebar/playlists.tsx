import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import { useCurrentUserPlaylist } from '@spotify/api';
import {
  Loading,
  SxSideBarItemButton,
  SxSidebarList,
} from '@spotify/components';
import { URLS } from '@spotify/utils';
import { useNavigate, useParams } from 'react-router-dom';

export const Playlists = () => {
  const { playlistConnection, isLoading, error } = useCurrentUserPlaylist();
  const { playlistSlug } = useParams();
  const navigate = useNavigate();

  if (isLoading || !playlistConnection) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const playlists = playlistConnection.items || [];

  return (
    <SxSidebarList sx={{ overflowY: 'auto', height: '100%' }}>
      {playlists.map(({ id, name, owner, images }) => (
        <SxSideBarItemButton
          key={id}
          selected={id === playlistSlug}
          onClick={() =>
            navigate(`${URLS.PLAYLIST}/${id}`, {
              state: { from: `${URLS.PLAYLIST}/${id}` },
            })
          }
        >
          <ListItemAvatar>
            <Avatar variant="rounded" src={images[0]?.url}>
              <HeadphonesIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography variant="subtitle2">
            {name || owner.display_name}
          </Typography>
        </SxSideBarItemButton>
      ))}
    </SxSidebarList>
  );
};
