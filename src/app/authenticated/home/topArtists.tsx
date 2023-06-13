import { Box, Button, Typography, styled } from '@mui/material';
import { useUsersTopArtists } from '@spotify/api';
import { ArtistCard, ArtistGrid, Loading } from '@spotify/components';
import { useResponsiveCards } from '@spotify/utils';
import { useNavigate } from 'react-router-dom';

export const TopArtists = () => {
  const navigate = useNavigate();
  const { isLoading, error, topConnection } = useUsersTopArtists({
    timeRange: 'short_term',
  });

  const numCards = useResponsiveCards({});

  if (isLoading || !topConnection) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const artist = topConnection.items.slice(0, numCards);

  console.log(artist);

  return (
    <Box>
      <SpaceBetween>
        <Typography sx={{ color: 'white', fontWeight: 700 }} variant="h5">
          Top artists this month
        </Typography>
        <Button
          variant="text"
          onClick={() => navigate('top-artists', { state: { from: 'home' } })}
        >
          Show all
        </Button>
      </SpaceBetween>
      <VisibleToYou variant="subtitle2">Only visible to you</VisibleToYou>
      <ArtistGrid numcards={numCards}>
        {artist.map(({ id, name, images, external_urls }) => (
          <ArtistCard
            key={id}
            name={name}
            imageUrl={images[0].url}
            type="Artist"
            listenUrl={external_urls.spotify}
          />
        ))}
      </ArtistGrid>
    </Box>
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
