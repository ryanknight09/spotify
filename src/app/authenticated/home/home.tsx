import type { FC } from 'react';

import { Stack, styled } from '@mui/material';
import { useProfile } from '@spotify/api';
import {
  HeroSection,
  Loading,
  MainContent,
  MainContentStack,
} from '@spotify/components';
import { useDominantImgColor } from '@spotify/utils';

import { Following } from './following';
import { Hero } from './hero';
import { TopArtists } from './topArtists';
import { TopTracks } from './topTracks';

export const Home: FC = () => {
  const { isLoading, error, me } = useProfile();
  const bgcolor = useDominantImgColor(me?.images[0].url || '');

  if (isLoading || !me) return <Loading />;
  if (error) return <p>{error.message}</p>;

  return (
    <MainContentStack>
      <HeroSection bgcolor={bgcolor}>
        <Hero
          imgUrl={me.images[0].url || ''}
          name={me.display_name}
          followerCount={me.followers.total}
        />
      </HeroSection>
      <MainContent bgcolor={bgcolor}>
        <ContentWrapper>
          <TopArtists />
          <TopTracks />
          <Following />
        </ContentWrapper>
      </MainContent>
    </MainContentStack>
  );
};

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  gap: '2.5rem',
}));

export const ArtistCard = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '15rem',
  padding: '1.5rem .5rem 0 .5rem',
  backgroundColor: theme.palette.secondary.main,
  overflow: 'hidden',
}));
