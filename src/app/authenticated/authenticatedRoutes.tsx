import type { FC } from 'react';

import { URLS } from '@spotify/utils';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthenticatedAppLayout } from './AuthenticatedAppLayout';
import { FollowingProfile } from './following/followingProfile';
import { Home } from './home/home';
import { PlaylsitProfile } from './playlist-profile/playlistProfile';
import { TopArtists } from './top-artists/topArtists';
import { TopTracks } from './top-tracks/topTracks';
import { YourLibrary } from './your-library/yourLibrary';

export const AuthenticatedRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to={URLS.HOME} />} />
    <Route element={<AuthenticatedAppLayout />}>
      <Route index path={URLS.HOME} element={<Home />} />
      <Route
        path={`${URLS.HOME}/${URLS.FOLLOWING}`}
        element={<FollowingProfile />}
      />
      <Route path={`${URLS.HOME}/${URLS.TOP_TRACKS}`} element={<TopTracks />} />
      <Route
        path={`${URLS.HOME}/${URLS.TOP_ARTISTS}`}
        element={<TopArtists />}
      />
      <Route path={URLS.LIBRARY} element={<YourLibrary />} />
      <Route
        path={`${URLS.PLAYLIST}/:playlistSlug`}
        element={<PlaylsitProfile />}
      />
      <Route path="*" element={<Navigate to={`/${URLS.HOME}`} />} />
    </Route>
  </Routes>
);
