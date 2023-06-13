import { Box, Button, List, Stack, Typography, styled } from '@mui/material';
import { useUsersTopTracks } from '@spotify/api';
import { Loading } from '@spotify/components';
import { useTracks } from '@spotify/utils';
import { useNavigate } from 'react-router-dom';

import { Track } from '../track';

export const TopTracks = () => {
  const navigate = useNavigate();
  const { onSongSelect, isSelected } = useTracks();
  const { isLoading, error, topConnection } = useUsersTopTracks({
    timeRange: 'short_term',
  });

  if (isLoading || !topConnection) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const tracks = topConnection.items.slice(0, 4);
  const trackList = tracks.map((track) => track.uri);

  return (
    <Stack>
      <Box>
        <SpaceBetween>
          <Typography sx={{ color: 'white', fontWeight: 700 }} variant="h5">
            Top tracks this month
          </Typography>
          <Button
            variant="text"
            onClick={() => navigate('top-tracks', { state: { from: 'home' } })}
          >
            Show all
          </Button>
        </SpaceBetween>
        <VisibleToYou variant="subtitle2">Only visible to you</VisibleToYou>
      </Box>
      <List>
        {tracks.map(({ id, album, name, artists, duration_ms, uri }, index) => (
          <Track
            key={id}
            orderNum={index + 1}
            imgUrl={album.images[0]?.url}
            name={name}
            albumName={album.name}
            artists={artists.map((artist) => artist.name).join(', ')}
            duration={duration_ms}
            onClick={() => onSongSelect({ trackList, uri })}
            selected={isSelected(uri)}
          />
        ))}
      </List>
    </Stack>
  );
};

const SpaceBetween = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const VisibleToYou = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontWeight: 400,
  marginBottom: '1rem',
}));
