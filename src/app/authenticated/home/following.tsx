import { Box, Button, Typography, styled } from '@mui/material';
import { useUsersFollowing } from '@spotify/api';
import { ArtistCard, ArtistGrid, Loading } from '@spotify/components';
import { useResponsiveCards } from '@spotify/utils';
import { useNavigate } from 'react-router-dom';

export const Following = () => {
  const navigate = useNavigate();
  const { isLoading, error, following } = useUsersFollowing();
  const numCards = useResponsiveCards({});

  if (isLoading || !following) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const artist = following.artists.items.slice(0, numCards);

  return (
    <Box>
      <SpaceBetween>
        <Typography sx={{ color: 'white', fontWeight: 700 }} variant="h5">
          Following
        </Typography>
        <Button
          variant="text"
          onClick={() =>
            navigate('following', { state: { from: 'following' } })
          }
        >
          Show all
        </Button>
      </SpaceBetween>
      <ArtistGrid numcards={numCards}>
        {artist.map(({ id, name, images }) => (
          <ArtistCard
            key={id}
            name={name}
            imageUrl={images[0].url}
            type="Artist"
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
  marginBottom: '1rem',
}));
