import { useQuery } from 'react-query';
import { PaginationConnection } from '../paginationConntection';
import { TopTrackItem } from './topTrack';

export type { TopTrackItem };

type UsersTopTracks = {
  items: TopTrackItem[];
} & PaginationConnection;

type queryParams = {
  timeRange: 'long_term' | 'medium_term ' | 'short_term';
  limit?: number;
};

export const useUsersTopTracks = ({ timeRange, limit = 50 }: queryParams) => {
  const { isLoading, error, data } = useQuery<UsersTopTracks, Error>({
    queryKey: [`me/top/tracks?time_range=${timeRange}&limit=${limit}`],
  });

  return { isLoading, error, topConnection: data };
};
