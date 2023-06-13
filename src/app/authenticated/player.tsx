import { Box, useTheme } from '@mui/material';
import { useTracks } from '@spotify/utils';
import SpotifyPlayer from 'react-spotify-web-playback';

import { useAuth } from '../auth-context/authContext';

export const Player = () => {
  const { token } = useAuth();
  const { tracks, index, play, setIndex, setPlay } = useTracks();
  const theme = useTheme();

  return (
    <Box>
      <SpotifyPlayer
        token={token as string}
        uris={tracks}
        offset={index}
        play={play}
        callback={(state) => {
          setPlay(state.isPlaying);
          setIndex(tracks.indexOf(state.track.uri));
        }}
        styles={{
          bgColor: theme.palette.common.black,
          sliderColor: theme.palette.common.white,
          sliderTrackColor: theme.palette.primary[200],
          sliderHandleColor: theme.palette.common.white,
          trackNameColor: theme.palette.common.white,
          trackArtistColor: theme.palette.neutral[100],
          color: theme.palette.common.white,
        }}
      />
    </Box>
  );
};
