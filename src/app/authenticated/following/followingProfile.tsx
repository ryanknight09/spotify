import { Box, Typography, styled } from '@mui/material';
import { useUsersFollowing } from '@spotify/api';
import { ArtistCard, ArtistGrid, Loading } from '@spotify/components';

export const FollowingProfile = () => {
  const { isLoading, error, following } = useUsersFollowing();

  if (isLoading || !following) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const artist = following.artists.items;

  return (
    <FollowingWrapper>
      <SpaceBetween>
        <Typography
          sx={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}
          variant="h5"
        >
          Following
        </Typography>
      </SpaceBetween>
      <ArtistGrid
        sx={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
          gap: '1.5rem',
        }}
      >
        {artist.map(({ id, name, images }) => (
          <ArtistCard
            key={id}
            name={name}
            imageUrl={images[0].url}
            type="Artist"
          />
        ))}
      </ArtistGrid>
    </FollowingWrapper>
  );
};

const FollowingWrapper = styled(Box)(() => ({
  padding: '6.5rem 1.5rem 1.5rem 1.5rem',
  overflowY: 'auto',
  height: '100%',
}));

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
