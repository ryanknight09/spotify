import { Box, Typography, styled } from '@mui/material';
import { useUsersTopArtists } from '@spotify/api';
import { ArtistCard, ArtistGrid, Loading } from '@spotify/components';

export const TopArtists = () => {
  const { isLoading, error, topConnection } = useUsersTopArtists({
    timeRange: 'short_term',
  });

  if (isLoading || !topConnection) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const artist = topConnection.items;

  return (
    <FollowingWrapper>
      <Box>
        <Typography sx={{ color: 'white', fontWeight: 700 }} variant="h5">
          Top artists this month
        </Typography>
        <VisibleToYou variant="subtitle2">Only visible to you</VisibleToYou>
      </Box>
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

const VisibleToYou = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontWeight: 400,
  marginBottom: '1rem',
}));
