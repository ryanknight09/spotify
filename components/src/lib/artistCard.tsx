import { Box, Stack, Typography, styled } from '@mui/material';
import { useHover } from '@spotify/utils';
import { ListenButton } from './listenButton';

export const ArtistCard = ({
  imageUrl,
  name,
  type,
  listenUrl,
}: {
  imageUrl: string;
  name: string;
  type: 'Artist' | 'Profile';
  listenUrl: string;
}) => {
  const { isHovering, hoverHandlers } = useHover();

  return (
    <ArtistCardWrapper {...hoverHandlers}>
      <ImageContainer>
        <ArtistImage src={imageUrl} alt="artist-image" />
      </ImageContainer>
      <Typography
        sx={{ color: 'white', fontWeight: 700, marginBottom: '.25rem' }}
      >
        {name}
      </Typography>
      <Box minHeight={'32px'}>
        {isHovering ? (
          <ListenButton size="small" href={listenUrl} variant="contained">
            Listen on Spotify
          </ListenButton>
        ) : (
          <Type variant="caption" sx={{ margin: 0 }}>
            {type}
          </Type>
        )}
      </Box>
    </ArtistCardWrapper>
  );
};

export const ArtistGrid = styled(Box)(
  ({ numcards }: { numcards?: number }) => ({
    minWidth: '18.75rem',
    display: 'grid',
    gridGap: '.75rem',
    gridTemplateColumns: `repeat(${numcards}, minmax(0, 1fr))`,
  })
);

const ArtistCardWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: '1rem',
  borderRadius: '.35rem',
  backgroundColor: theme.palette.secondary[200],
}));

const ImageContainer = styled(Box)(() => ({
  marginBottom: '1rem',
}));

const ArtistImage = styled('img')(() => ({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 8px 24px rgba(0,0,0,.5)',
}));

const Type = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontWeight: 400,
  marginBottom: '1rem',
}));
