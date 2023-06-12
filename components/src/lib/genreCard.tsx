import { Box, Stack, styled } from '@mui/material';

export const ArtistCard = ({ name }: { name: string }) => (
  <GenreCardWrapper></GenreCardWrapper>
);

export const GenreGrid = styled(Box)(({ numcards }: { numcards?: number }) => ({
  minWidth: '18.75rem',
  display: 'grid',
  gridGap: '.75rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
}));

const GenreCardWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: '1rem',
  borderRadius: '.35rem',
  backgroundColor: theme.palette.secondary[200],
}));
