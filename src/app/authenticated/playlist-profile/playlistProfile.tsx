import HeadsetIcon from '@mui/icons-material/Headset';
import { Box, List, Stack, Typography, styled } from '@mui/material';
import { usePlaylistById } from '@spotify/api';
import {
  HeroSection,
  ListenButton,
  Loading,
  MainContent,
  MainContentStack,
  TrackHeader,
} from '@spotify/components';
import { useDominantImgColor } from '@spotify/utils';
import { useParams } from 'react-router-dom';

import { Track } from '../track';

export const PlaylsitProfile = () => {
  const { playlistSlug = '' } = useParams();
  const { playlist, isLoading, error } = usePlaylistById({ id: playlistSlug });
  const imageUrl = playlist?.images[0]?.url || '';
  const bgcolor = useDominantImgColor(imageUrl);

  if (isLoading || !playlist) return <Loading />;
  if (error) return <p>{error.message}</p>;

  return (
    <MainContentStack>
      <HeroSection bgcolor={bgcolor}>
        <PlaylistWrapper>
          <ImageContainer>
            {imageUrl ? (
              <HeroImage src={playlist?.images[0]?.url || ''} alt="hero-pic" />
            ) : (
              <HeadsetIcon fontSize="large" color="primary" />
            )}
          </ImageContainer>
          <InfoWrapper>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Playlist
            </Typography>
            <DisplayName variant="h1">{playlist.name}</DisplayName>
            <PlaylistDescription
              variant="subtitle2"
              dangerouslySetInnerHTML={{
                __html: playlist.description,
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 400, marginBottom: '.5rem' }}
              >
                {`${playlist.followers.total} followers`}
              </Typography>
              <ListenButton
                size="small"
                href={playlist.external_urls.spotify}
                variant="contained"
              >
                Listen on Spotify
              </ListenButton>
            </Box>
          </InfoWrapper>
        </PlaylistWrapper>
      </HeroSection>
      <MainContent bgcolor={bgcolor}>
        <ContentWrapper>
          <TrackHeader />
          <List dense>
            {playlist.tracks.items.map(({ track }, index) => {
              const { id, album, name, artists, duration_ms, external_urls } =
                track;

              return (
                <Track
                  key={id}
                  orderNum={index + 1}
                  imgUrl={album.images[0]?.url}
                  name={name}
                  albumName={album.name}
                  artists={artists.map((artist) => artist.name).join(', ')}
                  duration={duration_ms}
                  listenUrl={external_urls.spotify}
                />
              );
            })}
          </List>
        </ContentWrapper>
      </MainContent>
    </MainContentStack>
  );
};

const PlaylistWrapper = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  borderRadius: 'inherit',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  height: '14.5rem',
  width: '14.5rem',
  minWidth: '12rem',
  alignSelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary[100],
  boxShadow: '0 4px 60px rgba(0,0,0,.5)',
  marginRight: '1.5rem',
  [theme.breakpoints.down(1280)]: {
    height: '11rem',
    width: '11rem',
  },
}));

const HeroImage = styled('img')(() => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

const InfoWrapper = styled(Stack)(({ theme }) => ({
  alignSelf: 'flex-end',
  maxHeight: '14.5rem',
  width: '100%',
  color: 'white',
  justifyContent: 'flex-end',
  flex: 1,
}));

const ContentWrapper = styled(Stack)(() => ({
  height: '100%',
  width: '100%',
  position: 'relative',
}));

const DisplayName = styled(Typography)(({ theme }) => ({
  marginBottom: '.5rem',
  fontWeight: 900,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  fontSize: '4.5rem',
  overflow: 'hidden',
  [theme.breakpoints.down(2000)]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down(830)]: {
    fontSize: '2rem',
  },
}));

const PlaylistDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  mb: '.5rem',
  color: theme.palette.primary.main,
  a: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));
