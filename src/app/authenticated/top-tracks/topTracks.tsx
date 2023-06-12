import { Box, List, Stack, Typography, styled } from '@mui/material';
import { useUsersTopTracks } from '@spotify/api';
import { Loading, TrackHeader } from '@spotify/components';
import { useTracks } from '@spotify/utils';

import { Track } from '../track';

export const TopTracks = () => {
  const { onSongSelect, isSelected } = useTracks();
  const { isLoading, error, topConnection } = useUsersTopTracks({
    timeRange: 'short_term',
  });

  if (isLoading || !topConnection) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const tracks = topConnection.items;
  const trackList = tracks.map((track) => track.uri);

  return (
    <TopTracksWrapper>
      <Stack gap="1rem">
        <Box>
          <Typography sx={{ color: 'white', fontWeight: 700 }} variant="h5">
            Top tracks this month
          </Typography>
          <VisibleToYou variant="subtitle2">Only visible to you</VisibleToYou>
        </Box>
        <TrackHeader />
        <List dense disablePadding>
          {tracks.map(
            ({ id, album, name, artists, duration_ms, uri }, index) => (
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
            )
          )}
        </List>
      </Stack>
    </TopTracksWrapper>
  );
};

const TopTracksWrapper = styled(Box)(() => ({
  padding: '6.5rem 1.5rem 1.5rem 1.5rem',
  overflowY: 'auto',
  height: '100%',
}));

const VisibleToYou = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontWeight: 400,
  marginBottom: '1rem',
}));
