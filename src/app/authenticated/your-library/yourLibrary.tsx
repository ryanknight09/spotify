import { Box, Stack, Typography, styled } from '@mui/material';
import { useCategories } from '@spotify/api';
import { Loading } from '@spotify/components';
import { useResponsiveCards } from '@spotify/utils';

import { assignRandomColor } from './colorUtils';

const intervals = {
  xs: 836,
  sm: 1052,
  md: 1475,
  lg: 1691,
  xl: 1896,
  xxl: 2100,
  xxxl: 2304,
};

export const YourLibrary = () => {
  const { categoriesResponse, isLoading, error } = useCategories();
  const numCards = useResponsiveCards({ intervals });

  if (isLoading || !categoriesResponse) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const assignedColors: { [key: number]: string } = {};

  console.table(categoriesResponse.categories.items);

  return (
    <SearchWrapper>
      <Title variant="h2">Browse all</Title>
      <GenreGrid numcards={numCards}>
        {categoriesResponse.categories.items.map((category, index) => {
          const randomColor = assignRandomColor(index, assignedColors);

          return (
            <GenreCardWrapper
              key={category.id}
              sx={{ backgroundColor: randomColor }}
            >
              <OverflowBox>
                <Title variant="h2" sx={{ overflowWrap: 'break-word' }}>
                  {category.name}
                </Title>

                <Image src={category.icons[0].url} alt="item-img" />
              </OverflowBox>
            </GenreCardWrapper>
          );
        })}
      </GenreGrid>
    </SearchWrapper>
  );
};

const SearchWrapper = styled(Stack)(() => ({
  padding: '6.5rem 1.5rem 1.5rem 1.5rem',
  overflow: 'hidden',
  height: '100%',
  gap: '1rem',
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.5rem',
  fontWeight: 700,
}));

const Image = styled('img')(({ theme }) => ({
  height: '100px',
  width: '100px',
  position: 'absolute',
  bottom: 0,
  right: 0,
  transform: 'rotate(25deg) translate(18%,-2%)',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
  borderBottomRightRadius: '.5rem',
}));

export const GenreGrid = styled(Box)(({ numcards }: { numcards?: number }) => ({
  overflowY: 'auto',
  height: '100%',
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: `repeat(${numcards}, minmax(0, 1fr))`,
}));

export const OverflowBox = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  padding: '1rem',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 'inherit',
}));

const GenreCardWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  minWidth: '100%',
  borderRadius: '.5rem',
  aspectRatio: '1/1',
}));
