import { useQuery } from 'react-query';
import { PaginationConnection } from '../paginationConntection';
import { TopArtistItem } from './topArtists';

type UsersTopArtists = {
  items: TopArtistItem[];
} & PaginationConnection;

type queryParams = {
  timeRange: 'long_term' | 'medium_term ' | 'short_term';
};

export const useUsersTopArtists = ({ timeRange }: queryParams) => {
  const { isLoading, error, data } = useQuery<UsersTopArtists, Error>({
    queryKey: [`me/top/artists?time_range=${timeRange}`],
  });

  return { isLoading, error, topConnection: data };
};
